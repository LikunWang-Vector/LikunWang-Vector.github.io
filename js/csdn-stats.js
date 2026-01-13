/**
 * CSDN Stats Sync
 * 将CSDN的阅读量、点赞、评论、收藏数据同步显示到博客
 */
(function() {
  // 从页面获取CSDN统计数据（通过data属性传递）
  function getCsdnStats() {
    var statsEl = document.getElementById('csdn-stats-data');
    if (!statsEl) return null;
    return {
      views: parseInt(statsEl.dataset.views) || 0,
      likes: parseInt(statsEl.dataset.likes) || 0,
      comments: parseInt(statsEl.dataset.comments) || 0,
      favorites: parseInt(statsEl.dataset.favorites) || 0
    };
  }

  // 更新阅读量显示（busuanzi + csdn_views）
  function updatePageViews() {
    var stats = getCsdnStats();
    if (!stats || stats.views === 0) return;

    // 等待busuanzi加载完成
    var checkBusuanzi = setInterval(function() {
      var pvEl = document.getElementById('busuanzi_value_page_pv');
      if (pvEl && pvEl.textContent && !/spinner/.test(pvEl.innerHTML)) {
        clearInterval(checkBusuanzi);
        var currentPv = parseInt(pvEl.textContent) || 0;
        var totalPv = currentPv + stats.views;
        pvEl.textContent = totalPv;
      }
    }, 100);

    // 5秒后停止检查
    setTimeout(function() { clearInterval(checkBusuanzi); }, 5000);
  }

  // 显示CSDN统计信息（点赞、评论、收藏）
  function showCsdnStats() {
    var stats = getCsdnStats();
    if (!stats) return;

    // 查找文章meta区域
    var metaSecond = document.querySelector('.meta-secondline');
    if (!metaSecond) return;

    // 创建CSDN统计显示
    var html = '';
    
    if (stats.likes > 0) {
      html += '<span class="post-meta-separator">|</span>';
      html += '<span class="post-meta-csdn-likes">';
      html += '<i class="far fa-thumbs-up fa-fw post-meta-icon"></i>';
      html += '<span class="post-meta-label">Likes:</span>';
      html += '<span>' + stats.likes + '</span>';
      html += '</span>';
    }

    if (stats.favorites > 0) {
      html += '<span class="post-meta-separator">|</span>';
      html += '<span class="post-meta-csdn-favorites">';
      html += '<i class="far fa-star fa-fw post-meta-icon"></i>';
      html += '<span class="post-meta-label">Favorites:</span>';
      html += '<span>' + stats.favorites + '</span>';
      html += '</span>';
    }

    if (html) {
      metaSecond.insertAdjacentHTML('beforeend', html);
    }
  }

  // 初始化
  function init() {
    updatePageViews();
    showCsdnStats();
  }

  // DOM加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // PJAX支持
  document.addEventListener('pjax:complete', init);
})();
