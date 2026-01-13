/**
 * Language Router for Hexo Blog
 * 提供文章页面中英文版本跳转功能
 * 与 rightside.pug 中的语言切换脚本配合使用
 */

(function() {
  'use strict';

  const LangRouter = {
    urlMap: null,

    // 加载URL映射
    loadUrlMap: async function() {
      if (this.urlMap) return this.urlMap;
      
      try {
        const response = await fetch('/js/lang-map.json');
        if (response.ok) {
          this.urlMap = await response.json();
          console.log('[LangRouter] Loaded', Object.keys(this.urlMap).length, 'URL mappings');
        } else {
          this.urlMap = {};
        }
      } catch (e) {
        this.urlMap = {};
      }
      return this.urlMap;
    },

    // 获取对应语言版本的URL
    getPairedUrl: async function(currentPath, targetLang) {
      await this.loadUrlMap();
      
      const targetUrl = this.urlMap[currentPath];
      if (targetUrl && targetUrl.includes('/' + targetLang + '/')) {
        return targetUrl;
      }
      return null;
    },

    // 中英文切换（文章页面直接跳转）
    // 返回 Promise<boolean>: true 表示已处理跳转，false 表示没有对应版本
    switchZhEn: async function(targetLang) {
      const currentPath = window.location.pathname;
      const targetUrl = await this.getPairedUrl(currentPath, targetLang);
      
      if (targetUrl) {
        console.log('[LangRouter] Redirecting to:', targetUrl);
        window.location.href = targetUrl;
        return true;
      } else {
        // 没有对应版本，显示提示
        const msg = targetLang === 'zh-CN' 
          ? '该文章暂无中文版本' 
          : 'English version not available';
        
        if (typeof Snackbar !== 'undefined') {
          Snackbar.show({ text: msg, pos: 'bottom-left' });
        } else if (typeof btf !== 'undefined' && btf.snackbarShow) {
          btf.snackbarShow(msg);
        } else {
          alert(msg);
        }
        return false;
      }
    },

    // 初始化
    init: function() {
      this.loadUrlMap();
    }
  };

  LangRouter.init();
  window.LangRouter = LangRouter;
})();
