#!/usr/bin/env node
/**
 * CSDN to Hexo Blog Migration Script
 * Extracts article info from CSDN HTML listing and creates Hexo markdown posts.
 * 
 * Usage:
 *   node migrate_csdn.js                    # Extract metadata only (fast)
 *   node migrate_csdn.js --fetch-content    # Also fetch full content from CSDN
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const CONFIG = {
  inputFile: 'data',
  outputDir: 'source/_posts',
  articlesJson: 'articles.json',
  delayBetweenRequests: 2000, // ms
};

/**
 * Parse HTML to extract article listings
 */
function parseArticleList(html) {
  const articles = [];
  
  // Match each article block
  const articleRegex = /<article[^>]*class="blog-list-box"[^>]*>([\s\S]*?)<\/article>/gi;
  let match;
  
  while ((match = articleRegex.exec(html)) !== null) {
    const block = match[1];
    const article = {};
    
    // Extract URL and ID
    const urlMatch = block.match(/href="(https:\/\/blog\.csdn\.net\/[^"]*\/article\/details\/(\d+))"/);
    if (urlMatch) {
      article.url = urlMatch[1];
      article.id = urlMatch[2];
    }
    
    // Extract title
    const titleMatch = block.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
    if (titleMatch) {
      article.title = cleanText(titleMatch[1]);
    }
    
    // Extract description
    const descMatch = block.match(/class="blog-list-content"[^>]*>([\s\S]*?)<\/div>/i);
    if (descMatch) {
      article.description = cleanText(descMatch[1]);
    }
    
    // Extract date (format: 发布博客&nbsp;YYYY.MM.DD)
    const dateMatch = block.match(/发布博客[^0-9]*(\d{4})\.(\d{2})\.(\d{2})/);
    if (dateMatch) {
      article.date = `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`;
    }
    
    // Extract views
    const viewsMatch = block.match(/class="view-num"[^>]*>(\d+)/);
    if (viewsMatch) {
      article.views = parseInt(viewsMatch[1], 10);
    }
    
    // Extract likes
    const likesMatch = block.match(/class="give-like-num"[^>]*>(\d+)/);
    if (likesMatch) {
      article.likes = parseInt(likesMatch[1], 10);
    }
    
    // Extract comments and favorites from comment-box
    const commentMatches = block.match(/class="comment-num"[^>]*>(\d+)/g);
    if (commentMatches && commentMatches.length >= 1) {
      const commentsNum = commentMatches[0].match(/(\d+)/);
      if (commentsNum) article.comments = parseInt(commentsNum[1], 10);
    }
    if (commentMatches && commentMatches.length >= 2) {
      const favoritesNum = commentMatches[1].match(/(\d+)/);
      if (favoritesNum) article.favorites = parseInt(favoritesNum[1], 10);
    }
    
    // Extract cover image
    const coverMatch = block.match(/class="course-img"[^>]*src="([^"]+)"/);
    if (coverMatch) {
      article.cover = coverMatch[1];
    }
    
    if (article.url && article.title) {
      articles.push(article);
    }
  }
  
  return articles;
}

/**
 * Clean HTML text
 */
function cleanText(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Sanitize filename
 */
function sanitizeFilename(title) {
  return title
    .replace(/[<>:"/\\|?*]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100)
    .replace(/^-|-$/g, '');
}


/**
 * Fetch article content from CSDN
 */
function fetchArticleContent(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Referer': 'https://blog.csdn.net/',
      },
    };
    
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect
        fetchArticleContent(res.headers.location).then(resolve).catch(reject);
        return;
      }
      
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = parseArticleContent(data);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Parse article page content
 */
function parseArticleContent(html) {
  let content = '';
  let tags = [];
  let category = 'General';
  
  // Extract main content
  const contentMatch = html.match(/id="content_views"[^>]*>([\s\S]*?)<\/div>\s*<\/article>/i) ||
                       html.match(/class="article_content"[^>]*>([\s\S]*?)<\/div>\s*<\/article>/i);
  
  if (contentMatch) {
    content = convertHtmlToMarkdown(contentMatch[1]);
  }
  
  // Extract tags
  const tagMatches = html.matchAll(/class="tag-link"[^>]*>([^<]+)<\/a>/gi);
  for (const m of tagMatches) {
    const tag = cleanText(m[1]);
    if (tag && !tags.includes(tag)) {
      tags.push(tag);
    }
  }
  
  // Extract category from column name
  const categoryMatch = html.match(/class="column_name"[^>]*>([^<]+)<\/a>/i);
  if (categoryMatch) {
    const cat = cleanText(categoryMatch[1]);
    if (cat && cat !== '原创' && cat !== '转载') {
      category = cat;
    }
  }
  
  return { content, tags, category };
}

/**
 * Convert HTML to Markdown
 */
function convertHtmlToMarkdown(html) {
  let md = html;
  
  // Remove script and style
  md = md.replace(/<script[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<style[\s\S]*?<\/style>/gi, '');
  
  // Code blocks
  md = md.replace(/<pre[^>]*><code[^>]*class="[^"]*(?:language-|lang-)(\w+)[^"]*"[^>]*>([\s\S]*?)<\/code><\/pre>/gi, 
    (_, lang, code) => `\n\`\`\`${lang}\n${cleanText(code)}\n\`\`\`\n`);
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, 
    (_, code) => `\n\`\`\`\n${cleanText(code)}\n\`\`\`\n`);
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, 
    (_, code) => `\n\`\`\`\n${cleanText(code)}\n\`\`\`\n`);
  
  // Inline code
  md = md.replace(/<code[^>]*>([^<]*)<\/code>/gi, '`$1`');
  
  // Headers
  for (let i = 6; i >= 1; i--) {
    const regex = new RegExp(`<h${i}[^>]*>([\\s\\S]*?)<\\/h${i}>`, 'gi');
    md = md.replace(regex, (_, text) => `\n${'#'.repeat(i)} ${cleanText(text)}\n`);
  }
  
  // Bold and italic
  md = md.replace(/<(?:b|strong)[^>]*>([\s\S]*?)<\/(?:b|strong)>/gi, '**$1**');
  md = md.replace(/<(?:i|em)[^>]*>([\s\S]*?)<\/(?:i|em)>/gi, '*$1*');
  
  // Links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi, '[$2]($1)');
  
  // Images
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '\n![$2]($1)\n');
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '\n![image]($1)\n');
  
  // Lists
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, text) => `- ${cleanText(text)}\n`);
  md = md.replace(/<\/?[uo]l[^>]*>/gi, '\n');
  
  // Blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, 
    (_, text) => `\n> ${cleanText(text)}\n`);
  
  // Paragraphs and line breaks
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '\n$1\n');
  
  // Remove remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');
  
  // Clean up entities
  md = md.replace(/&nbsp;/g, ' ');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&quot;/g, '"');
  
  // Clean up whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  
  return md.trim();
}


/**
 * Create Hexo post content
 */
function createHexoPost(article, contentData = {}) {
  const title = (article.title || 'Untitled').replace(/"/g, '\\"');
  const date = article.date || new Date().toISOString().split('T')[0];
  const category = contentData.category || 'General';
  const tags = contentData.tags || [];
  const content = contentData.content || article.description || '';
  
  let frontMatter = `---
title: "${title}"
date: ${date}
updated: ${date}
categories:
  - ${category}
`;

  if (tags.length > 0) {
    frontMatter += 'tags:\n';
    tags.forEach(tag => {
      frontMatter += `  - ${tag}\n`;
    });
  }

  frontMatter += `csdn_views: ${article.views || 0}
csdn_likes: ${article.likes || 0}
csdn_comments: ${article.comments || 0}
csdn_favorites: ${article.favorites || 0}
csdn_url: ${article.url || ''}
`;

  if (article.cover) {
    frontMatter += `cover: ${article.cover}\n`;
  }

  if (article.description) {
    const desc = article.description.substring(0, 200).replace(/"/g, '\\"');
    frontMatter += `description: "${desc}"\n`;
  }

  frontMatter += '---\n\n';

  // Add original link notice
  const originalNotice = `> 本文迁移自CSDN博客，原文链接：[${article.title}](${article.url})
> 
> 原文数据：👀 ${article.views || 0} 阅读 | 👍 ${article.likes || 0} 点赞 | 💬 ${article.comments || 0} 评论 | ⭐ ${article.favorites || 0} 收藏

`;

  return frontMatter + originalNotice + content;
}

/**
 * Save post to file
 */
function savePost(article, contentData, outputDir) {
  const filename = sanitizeFilename(article.title || 'untitled') + '.md';
  const filepath = path.join(outputDir, filename);
  const content = createHexoPost(article, contentData);
  
  fs.writeFileSync(filepath, content, 'utf8');
  return filepath;
}

/**
 * Sleep helper
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(60));
  console.log('CSDN to Hexo Blog Migration Tool');
  console.log('='.repeat(60));
  
  const fetchContent = process.argv.includes('--fetch-content');
  
  // Create output directory
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }
  
  // Step 1: Parse article list
  console.log('\n[Step 1] Parsing article list from "data" file...');
  const html = fs.readFileSync(CONFIG.inputFile, 'utf8');
  const articles = parseArticleList(html);
  console.log(`Found ${articles.length} articles`);
  
  // Save articles metadata to JSON
  fs.writeFileSync(CONFIG.articlesJson, JSON.stringify(articles, null, 2), 'utf8');
  console.log(`Saved article metadata to ${CONFIG.articlesJson}`);
  
  // Step 2: Process each article
  console.log('\n[Step 2] Processing articles...');
  if (fetchContent) {
    console.log('Note: Fetching full content from CSDN (this may take a while)...\n');
  } else {
    console.log('Note: Using metadata only. Run with --fetch-content to fetch full articles.\n');
  }
  
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const title = (article.title || 'Unknown').substring(0, 50);
    process.stdout.write(`[${i + 1}/${articles.length}] Processing: ${title}...`);
    
    try {
      let contentData = { content: '', tags: [], category: 'General' };
      
      if (fetchContent && article.url) {
        contentData = await fetchArticleContent(article.url);
        await sleep(CONFIG.delayBetweenRequests);
      }
      
      const filepath = savePost(article, contentData, CONFIG.outputDir);
      console.log(` ✓`);
      successCount++;
    } catch (e) {
      console.log(` ✗ Error: ${e.message}`);
      errorCount++;
      
      // Still save with metadata only on error
      try {
        savePost(article, { content: '', tags: [], category: 'General' }, CONFIG.outputDir);
      } catch (e2) {
        // ignore
      }
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('Migration Complete!');
  console.log('='.repeat(60));
  console.log(`Total articles: ${articles.length}`);
  console.log(`Successfully migrated: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`\nPosts saved to: ${CONFIG.outputDir}/`);
  console.log(`Article metadata: ${CONFIG.articlesJson}`);
  console.log('\nNext steps:');
  console.log('1. Review the generated markdown files');
  console.log('2. Run "hexo generate" to build the site');
  console.log('3. Run "hexo server" to preview locally');
}

main().catch(console.error);
