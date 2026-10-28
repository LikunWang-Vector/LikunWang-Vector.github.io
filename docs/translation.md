# 语言栏：中英原生 + Google 当页翻译

语言栏在导航栏右侧，结构很简单：

- **English / 中文（简体）**：原生人工页面，默认内容。
- **其他语言**：日本語、한국어、繁體中文、Français、Deutsch、Español、Русский、Português。
- 点击其他语言后，由 **Google Translate Element** 在当前页面内直接翻译，不跳转、不打开新标签页，也没有额外说明文字。

## 实现方式

使用 Google 官方提供的可嵌入翻译组件：

```html
<div id="google_translate_element"></div>
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
```

初始化：

```js
new google.translate.TranslateElement({
  pageLanguage: 'en',          // 或 'zh-CN'
  includedLanguages: 'ja,ko,zh-TW,fr,de,es,ru,pt',
  autoDisplay: false
}, 'google_translate_element');
```

语言栏的每个非原生意语言按钮通过隐藏的 `.goog-te-combo` 切换：

```js
const combo = document.querySelector('.goog-te-combo');
combo.value = 'ja';
combo.dispatchEvent(new Event('change', { bubbles: true }));
```

Google 组件会在原地替换页面文本，不产生页面跳转。它的下拉框、顶部横幅和 iframe 被 CSS 隐藏，页面上只保留我们自己的语言栏。

## 加载策略

- 页面加载时**不加载 Google 脚本**。
- 第一次点击非原生语言时才加载 `translate.google.com/translate_a/element.js`。
- 后续切换语言复用同一个组件，只改 `.goog-te-combo`。
- Google 组件的脚本如果被拦截（例如国内网络），按钮不会生效，但页面不会跳转或报错；原生中文/英文仍可正常使用。

## 配置

`config/_default/params.yaml`：

```yaml
features:
  translation:
    enable: true
    native: true
    google:
      languages: [ja, ko, zh-Hant, fr, de, es, ru, pt]
```

- `zh-Hant` 会映射为 Google 的 `zh-TW`。
- 当前页面的 `pageLanguage` 由 `<html lang>` 决定：英文页用 `en`，中文页用 `zh-CN`。
- 语言列表修改后重新构建即可；不需要其他配置。

## 不需要什么

- 不需要 Google Cloud API key。
- 不需要服务端代理或 CORS 配置。
- 不需要 GitHub Secrets。
- 不经过本站服务器；翻译由访客浏览器直接调用 Google。

## 国内访问

- 中文读者直接使用 `/zh/` 原生中文版，不依赖 Google。
- Google 无法访问时，其他语言按钮不会生效；这是预期行为，不影响中文/英文页面。
- 如果以后要让国内也能用机器翻译，需要另行接一个国内可访问的翻译 API 或代理；当前方案不包含。

## 常见问题

| 现象 | 说明 |
|------|------|
| 点击其他语言没有反应 | 当前网络无法加载 Google 脚本；使用中文/英文原生页面 |
| Google 顶部横幅出现 | CSS 会隐藏；若仍有残留，刷新页面 |
| 想恢复原文 | 点击语言栏里的 English / 中文（简体），会重新加载原生页面 |
| Google 组件以后失效 | Google 可随时调整/下线该组件；届时需要改用 Google Cloud Translation API + 代理，或换国内 API |
| 页面布局被顶下去 | 组件会把 banner 隐藏并重置 body 顶部偏移；若出现异常，刷新页面 |

## 参考

- Google Translate 可嵌入组件的标准写法（W3Schools）：
  <https://www.w3schools.com/howto/howto_google_translate.asp>
- 组件脚本：
  <https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit>

> 说明：开发环境所在网络无法访问 Google，因此只能验证语言栏、按钮和脚本加载逻辑，无法在此实际验证 Google 返回的翻译结果；海外访客可直接测试。Google 未对该嵌入式组件提供正式 SLA，若未来下线，需要改用 API + 代理。

## 相关文件

- 语言栏与隐藏组件：[layouts/partials/components/translate.html](../layouts/partials/components/translate.html)
- 加载、切换、隐藏 Google 横幅：[assets/js/site.js](../assets/js/site.js)
- 配置：[config/_default/params.yaml](../config/_default/params.yaml)
- 本地预览：[scripts/preview.sh](../scripts/preview.sh)
