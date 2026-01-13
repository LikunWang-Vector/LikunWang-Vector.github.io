---
title: "HTML多媒体（插件/音频/视频/YouTube）：一篇就够用"
date: 2023-02-10
updated: 2023-02-10
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 音视频
  - 前端
  - 前端框架
  - 媒体
csdn_views: 1420
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 5
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128962652
lang_pair:
  en: "HTML Multimedia - Complete Guide (Plugins, Audio, Video, YouTube)"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML多媒体（插件/音频/视频/YouTube）：一篇就够用](https://blog.csdn.net/m0_59180666/article/details/128962652)
> 📊 1420 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 5 收藏

## HTML媒体

* * *

**Web 上的多媒体指的是音效、音乐、视频和动画。**

**现代网络浏览器已支持很多多媒体格式。**

* * *

### 什么是多媒体？

多媒体来自多种不同的格式。它可以是我们听到或看到的任何内容，文字、图片、音乐、音效、录音、电影、动画等等。

在因特网上，我们经常发现嵌入网页中的多媒体元素，现代浏览器已支持多种多媒体格式。

在本教程中，我们将了解到不同的多媒体格式，以及如何在我们的网页中使用它们。

* * *

### 浏览器支持

第一款因特网浏览器只支持文本，而且即使是对文本的支持也仅限于单一字体和单一颜色。随后诞生了支持颜色、字体和文本样式的浏览器，图片支持也被加入。

不同的浏览器以不同的方式处理对音效、动画和视频的支持。某些元素能够以内联的方式处理，而某些则需要额外的插件。

我们将在下面学习更多有关插件的知识。

* * *

### 多媒体格式

多媒体元素（比如视频和音频）存储于媒体文件中。

确定媒体类型的最常用的方法是查看文件扩展名。当浏览器得到文件扩展名 .htm 或 .html 时，它会假定该文件是 HTML 页面。.xml 扩展名指示 XML 文件，而 .css 扩展名指示样式表。图片格式则通过 .gif 或 .jpg 来识别。

多媒体元素元素也拥有带有不同扩展名的文件格式，比如 .swf、.wmv、.mp3 以及 .mp4。

* * *

### 视频格式

MP4 格式是一种新的即将普及的因特网视频格式。HTML5 、Flash 播放器以及优酷等视频网站均支持它。

格式| 文件| 描述  
---|---|---  
AVI| .avi| AVI (Audio Video Interleave) 格式是由微软开发的。所有运行 Windows 的计算机都支持 AVI 格式。它是因特网上很常见的格式，但非 Windows 计算机并不总是能够播放。  
WMV| .wmv| Windows Media 格式是由微软开发的。Windows Media 在因特网上很常见，但是如果未安装额外的（免费）组件，就无法播放 Windows Media 电影。一些后期的 Windows Media 电影在所有非 Windows 计算机上都无法播放，因为没有合适的播放器。  
MPEG| 

  * .mpg
  * .mpeg

| MPEG (Moving Pictures Expert Group) 格式是因特网上最流行的格式。它是跨平台的，得到了所有最流行的浏览器的支持。  
QuickTime| .mov| QuickTime 格式是由苹果公司开发的。QuickTime 是因特网上常见的格式，但是 QuickTime 电影不能在没有安装额外的（免费）组件的 Windows 计算机上播放。  
RealVideo| 

  * .rm
  * .ram

| RealVideo 格式是由 Real Media 针对因特网开发的。该格式允许低带宽条件下（在线视频、网络电视）的视频流。由于是低带宽优先的，质量常会降低。  
Flash| 

  * .swf
  * .flv

| Flash (Shockwave) 格式是由 Macromedia 开发的。Shockwave 格式需要额外的组件来播放。但是该组件会预装到 Firefox 或 IE 之类的浏览器上。  
Mpeg-4| .mp4| Mpeg-4 (with H.264 video compression) 是一种针对因特网的新格式。事实上，YouTube 推荐使用 MP4。YouTube 接收多种格式，然后全部转换为 .flv 或 .mp4 以供分发。越来越多的视频发布者转到 MP4，将其作为 Flash 播放器和 HTML5 的因特网共享格式。  
  
* * *

### 声音格式

格式| 文件| 描述  
---|---|---  
MIDI| 

  * .mid
  * .midi

|  MIDI (Musical Instrument Digital Interface) 是一种针对电子音乐设备（比如合成器和声卡）的格式。MIDI 文件不含有声音，但包含可被电子产品（比如声卡）播放的数字音乐指令。 [点击这里播放 The Beatles](https://www.w3school.com.cn/i/beatles.mid "点击这里播放 The Beatles")。 因为 MIDI 格式仅包含指令，所以 MIDI 文件极其小巧。上面的例子只有 23k 的大小，但却能播放将近 5 分钟。MIDI 得到了广泛的平台上的大量软件的支持。大多数流行的网络浏览器都支持 MIDI。  
RealAudio| 

  * .rm
  * .ram

| RealAudio 格式是由 Real Media 针对因特网开发的。该格式也支持视频。该格式允许低带宽条件下的音频流（在线音乐、网络音乐）。由于是低带宽优先的，质量常会降低。  
Wave| .wav| Wave (waveform) 格式是由 IBM 和微软开发的。所有运行 Windows 的计算机和所有网络浏览器（除了 Google Chrome）都支持它。  
WMA| .wma| WMA 格式 (Windows Media Audio)，质量优于 MP3，兼容大多数播放器，除了 iPod。WMA 文件可作为连续的数据流来传输，这使它对于网络电台或在线音乐很实用。  
MP3| 

  * .mp3
  * .mpga

| MP3 文件实际上是 MPEG 文件的声音部分。MPEG 格式最初是由运动图像专家组开发的。MP3 是其中最受欢迎的针对音乐的声音格式。期待未来的软件系统都支持它。  
  
* * *

### 使用哪种格式？

WAVE 是因特网上最受欢迎的 _无压缩_ 声音格式，所有流行的浏览器都支持它。如果需要未经压缩的声音（音乐或演讲），那么应该使用 WAVE 格式。

MP3 是最新的 _压缩_ 录制音乐格式。MP3 这个术语已经成为数字音乐的代名词。如果某网址从事录制音乐，那么 MP3 是很好的选择。

* * *

## HTML插件

* * *

**插件（Plug-in）是扩展浏览器标准功能的计算机程序。**

* * *

### 插件

插件被设计用于许多不同的目的：

  * 运行 Java 小程序
  * 运行 ActiveX 控件
  * 显示 Flash 电影
  * 显示地图
  * 扫描病毒
  * 验证银行账号

#### 警告！

大多数浏览器不再支持 Java Applet 和插件。

所有浏览器均不再支持 ActiveX 控件。

在现代浏览器中，对 Shockwave Flash 的支持也已关闭。

* * *

### <object> 元素

所有浏览器均支持 `<object>` 元素。

`<object>` 元素定义 HTML 文档中的嵌入式对象。

它旨在将插件（例如 Java applet、PDF 阅读器和 Flash 播放器）嵌入网页中，但也可以用于将 HTML 包含在 HTML 中：

#### 实例

```html <object width="100%" height="500px" data="snippet.html"></object> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_object_html "亲自试一试")

或者我们喜爱的图像：

#### 实例

```html <object data="audi.jpeg"></object> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_object_image "亲自试一试")

* * *

### <embed> 元素

所有主要浏览器均支持 `<embed>` 元素。

`<embed>` 元素也可定义了 HTML 文档中的嵌入式对象。

Web 浏览器长期以来一直支持 <embed> 元素。但是，它不属于 HTML5 之前的 HTML 规范的一部分。

#### 实例

```html <embed src="audi.jpeg"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_embed_image "亲自试一试")

注意，<embed> 元素没有结束标记。它无法包含替代文本。

`<embed>` 元素也可用于在 HTML 中包含 HTML：

#### 实例

```html <embed width="100%" height="500px" src="snippet.html"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_embed_html "亲自试一试")

* * *

## HTML音频 

* * *

**在 HTML 中播放声音的方法有很多种。**

* * *

### 问题，问题，以及解决方法

在 HTML 中播放音频并不容易！

这需要谙熟大量技巧，以确保音频文件在所有浏览器中（Internet Explorer, Chrome, Firefox, Safari, Opera）和所有硬件上（PC, Mac , iPad, iPhone）都能够播放。

下面是总结了的问题和解决方法。

* * *

### 使用插件

浏览器插件是一种扩展浏览器标准功能的小型计算机程序。

插件有很多用途：播放音乐、显示地图、验证银行账号，控制输入等等。

可使用 <object> 或 <embed> 标签来将插件添加到 HTML 页面。

这些标签定义资源（通常非 HTML 资源）的容器，根据类型，它们即会由浏览器显示，也会由外部插件显示。

* * *

### 使用 <embed> 元素

<embed> 标签定义外部（非 HTML）内容的容器。（这是一个 HTML5 标签，在 HTML4 中是非法的，但是所有浏览器中都有效）。

下面的代码片段能够显示嵌入网页中的 MP3 文件：

#### 实例

```html <embed height="100" width="100" src="song.mp3" /> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_audio_embed "亲自试一试")

#### 问题：

  * <embed> 标签在 HTML 4 中是无效的。页面无法通过 HTML 4 验证。
  * 不同的浏览器对音频格式的支持也不同。
  * 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频。
  * 如果用户的计算机未安装插件，无法播放音频。
  * 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放。

注释：使用 <!DOCTYPE html> (HTML5) 解决验证问题。

* * *

### 使用 <object> 元素

<object tag> 标签也可以定义外部（非 HTML）内容的容器。

下面的代码片段能够显示嵌入网页中的 MP3 文件：

#### 实例

```html <object height="100" width="100" data="song.mp3"></object> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_audio_object "亲自试一试")

#### 问题：

  * 不同的浏览器对音频格式的支持也不同。
  * 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频。
  * 如果用户的计算机未安装插件，无法播放音频。
  * 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放。

* * *

### 使用 HTML5 <audio> 元素

<audio> 元素是一个 HTML5 元素，在 HTML 4 中是非法的，但在所有浏览器中都有效。

#### 实例

```html <audio controls="controls"> <source src="song.mp3" type="audio/mp3" /> <source src="song.ogg" type="audio/ogg" /> Your browser does not support this audio format. </audio> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_audio_html5 "亲自试一试")

上面的例子使用了一个 mp3 文件，这样它在 Internet Explorer、Chrome 以及 Safari 中是有效的。

为了使这段音频在 Firefox 和 Opera 中同样有效，添加了一个 ogg 类型的文件。如果失败，会显示错误消息。

#### 问题：

  * <audio> 标签在 HTML 4 中是无效的。这样使页面无法通过 HTML 4 验证。
  * 我们必须把音频文件转换为不同的格式。
  * <audio> 元素在老式浏览器中不起作用。

注释：使用 <!DOCTYPE html> (HTML5) 解决验证问题。

* * *

### 最好的 HTML 解决方法

#### 实例

```html <audio controls="controls" height="100" width="100"> <source src="song.mp3" type="audio/mp3" /> <source src="song.ogg" type="audio/ogg" /> <embed height="100" width="100" src="song.mp3" /> </audio> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_audio_all "亲自试一试")

上面的例子使用了两个不同的音频格式。HTML5 <audio> 元素会尝试以 mp3 或 ogg 来播放音频。如果失败，代码将回退尝试 <embed> 元素。

#### 问题：

  * 我们必须把音频转换为不同的格式。
  * <audio> 元素无法通过 HTML 4 和 XHTML 验证。
  * <embed> 元素无法通过 HTML 4 和 XHTML 验证。
  * <embed> 元素无法回退来显示错误消息。

注释：使用 <!DOCTYPE html> (HTML5) 解决验证问题。

* * *

### 向网站添加音频的最简单方法

向网页添加音频的最简单的方法是什么？

雅虎的媒体播放器绝对算其中之一。

使用雅虎媒体播放器是一个不同的途径：只需简单地让雅虎来完成歌曲播放的工作就好了。

它能播放 mp3 以及一系列其他格式。通过一行简单的代码，就可以把它添加到网页中，轻松地将 HTML 页面转变为专业的播放列表。

* * *

### 雅虎媒体播放器

#### 实例

```html <a href="song.mp3">Play Sound</a> <script type="text/javascript" src="http://mediaplayer.yahoo.com/js"> </script> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_audio_yahoo "亲自试一试")

使用雅虎播放器是免费的。如需使用它，我们需要把这段 JavaScript 插入网页底部：

```html <script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script> ``` 

然后只需简单地把 MP3 文件链接到 HTML 中，JavaScript 会自动地为每首歌创建播放按钮：

```html <a href="song1.mp3">Play Song 1</a> <a href="song2.mp3">Play Song 2</a> ... ... ... ``` 

雅虎媒体播放器为用户提供的是一个小型的播放按钮，而不是完整的播放器。不过，当点击该按钮，会弹出完整的播放器。

注意，这个播放器始终停靠在窗框底部。只需点击它，就可将其滑出。

* * *

### 使用超链接

如果网页包含指向媒体文件的超链接，大多数浏览器会使用“辅助应用程序”来播放文件。

以下代码片段显示指向 mp3 文件的链接。如果用户点击该链接，浏览器会启动“辅助应用程序”来播放该文件：

#### 实例

```html <a href="song.mp3">Play the sound</a> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_audio_link "亲自试一试")

* * *

### 内联的声音

当我们在网页中包含声音，或者作为网页的组成部分时，它被称为内联声音。

如果我们打算在 web 应用程序中使用内联声音，需要意识到很多人都觉得内联声音令人恼火。同时注意，用户可能已经关闭了浏览器中的内联声音选项。

我们最好的建议是只在用户希望听到内联声音的地方包含它们。一个正面的例子是，在用户需要听到录音并点击某个链接时，会打开页面然后播放录音。

* * *

### HTML 4.01 多媒体标签

标签| 描述  
---|---  
[<applet>](https://www.w3school.com.cn/tags/tag_applet.asp "<applet>")| 不赞成。定义内嵌 applet。  
<embed>| HTML4 中不赞成，HTML5 中允许。定义内嵌对象。  
[<object>](https://www.w3school.com.cn/tags/tag_object.asp "<object>")| 定义内嵌对象。  
[<param>](https://www.w3school.com.cn/tags/tag_param.asp "<param>")| 定义对象的参数。  
  
* * *

### HTML 5 多媒体标签

标签| 描述  
---|---  
[<audio>](https://www.w3school.com.cn/tags/tag_audio.asp "<audio>")| 标签定义声音，比如音乐或其他音频流。  
[<embed>](https://www.w3school.com.cn/tags/tag_embed.asp "<embed>")| 标签定义嵌入的内容，比如插件。  
  
* * *

## HTML视频

* * *

**在 HTML 中播放视频的方法有很多种。**

* * *

#### 实例

```html <video width="320" height="240" controls="controls"> <source src="movie.mp4" type="video/mp4" /> <source src="movie.ogg" type="video/ogg" /> <source src="movie.webm" type="video/webm" /> <object data="movie.mp4" width="320" height="240"> <embed src="movie.swf" width="320" height="240" /> </object> </video> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_video "亲自试一试")

* * *

### 问题以及解决方法

在 HTML 中播放视频并不容易！

这需要谙熟大量技巧，以确保视频文件在所有浏览器中（Internet Explorer, Chrome, Firefox, Safari, Opera）和所有硬件上（PC, Mac , iPad, iPhone）都能够播放。

下面是总结了的问题和解决方法。

* * *

### 使用 <embed> 标签

<embed> 标签的作用是在 HTML 页面中嵌入多媒体元素。

下面的 HTML 代码显示嵌入网页的 Flash 视频：

#### 实例

```html <embed src="movie.swf" height="200" width="200"/> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_video_embed "亲自试一试")

#### 问题

  * HTML4 无法识别 <embed> 标签。这样使页面无法通过验证。
  * 如果浏览器不支持 Flash，那么视频将无法播放
  * iPad 和 iPhone 不能显示 Flash 视频。
  * 如果将视频转换为其他格式，那么它仍然不能在所有浏览器中播放。

* * *

### 使用 <object> 标签

<object> 标签的作用是在 HTML 页面中嵌入多媒体元素。

下面的 HTML 片段显示嵌入网页的一段 Flash 视频：

#### 实例

```html <object data="movie.swf" height="200" width="200"/> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_video_object "亲自试一试")

#### 问题

  * 如果浏览器不支持 Flash，将无法播放视频。
  * iPad 和 iPhone 不能显示 Flash 视频。
  * 如果将视频转换为其他格式，那么它仍然不能在所有浏览器中播放。

* * *

### 使用 <video> 标签

<video> 是 HTML 5 中的新标签。

<video> 标签的作用是在 HTML 页面中嵌入视频元素。

以下 HTML 片段会显示一段嵌入网页的 ogg、mp4 或 webm 格式的视频：

#### 实例

```html <video width="320" height="240" controls="controls"> <source src="movie.mp4" type="video/mp4" /> <source src="movie.ogg" type="video/ogg" /> <source src="movie.webm" type="video/webm" /> Your browser does not support the video tag. </video> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_video_html5 "亲自试一试")

#### 问题

  * 我们必须把视频转换为很多不同的格式。
  * <video> 元素在老式浏览器中无效。
  * <video> 元素无法通过 HTML 4 和 XHTML 验证。

* * *

### 最好的 HTML 解决方法

HTML 5 + <object> \+ <embed>

```html <video width="320" height="240" controls="controls"> <source src="movie.mp4" type="video/mp4" /> <source src="movie.ogg" type="video/ogg" /> <source src="movie.webm" type="video/webm" /> <object data="movie.mp4" width="320" height="240"> <embed src="movie.swf" width="320" height="240" /> </object> </video> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_video "亲自试一试")

上例中使用了 4 中不同的视频格式。HTML 5 <video> 元素会尝试播放以 mp4、ogg 或 webm 格式中的一种来播放视频。如果均失败，则回退到 <embed> 元素。

#### 问题

  * 我们必须把视频转换为很多不同的格式
  * <video> 元素无法通过 HTML 4 和 XHTML 验证。
  * <embed> 元素无法通过 HTML 4 和 XHTML 验证。

注释：使用 <!DOCTYPE html> (HTML5) 解决验证问题。

* * *

### 优酷：解决方案

在 HTML 中显示视频的最简单的方法是使用优酷等视频网站。

如果我们希望在网页中播放视频，那么可以把视频上传到优酷等视频网站，然后在网页中插入 HTML 代码即可播放视频：

```html <embed src="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf" width="480" height="400" type="application/x-shockwave-flash"> </embed> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_video_youku "亲自试一试")

* * *

### 使用超链接

如果网页包含指向媒体文件的超链接，大多数浏览器会使用“辅助应用程序”来播放文件。

以下代码片段显示指向 AVI 文件的链接。如果用户点击该链接，浏览器会启动“辅助应用程序”，比如 Windows Media Player 来播放这个 AVI 文件：

#### 实例

```html <a href="movie.swf">Play a video file</a> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_video_link "亲自试一试")

* * *

### 关于内联视频的一段注释

当视频被包含在网页中时，它被称为内联视频。

如果我们打算在 web 应用程序中使用内联视频，需要意识到很多人都觉得内联视频令人恼火。

同时注意，用户可能已经关闭了浏览器中的内联视频选项。

我们最好的建议是只在用户希望看到内联视频的地方包含它们。一个正面的例子是，在用户需要看到视频并点击某个链接时，会打开页面然后播放视频。

* * *

### HTML 4.01 多媒体标签

标签| 描述  
---|---  
[<applet>](https://www.w3school.com.cn/tags/tag_applet.asp "<applet>")| 不赞成。定义内嵌 applet。  
<embed>| 不赞成。定义内嵌对象。（HTML5 中允许）  
[<object>](https://www.w3school.com.cn/tags/tag_object.asp "<object>")| 定义内嵌对象。  
[<param>](https://www.w3school.com.cn/tags/tag_param.asp "<param>")| 定义对象的参数。  
  
* * *

### HTML 5 多媒体标签

标签| 描述  
---|---  
[<video>](https://www.w3school.com.cn/tags/tag_video.asp "<video>")| 标签定义声音，比如音乐或其他音频流。  
[<embed>](https://www.w3school.com.cn/tags/tag_embed.asp "<embed>")| 标签定义嵌入的内容，比如插件。  
  
* * *

## HTML与YouTube

* * *

**在 HTML 中包含视频的最简单的方法是，使用 YouTube。**

* * *

### 纠结视频格式？

将视频转换为不同的格式可能既困难又耗时。

一个更简单的解决方案是让 YouTube 在我们的网页中播放视频。

* * *

### YouTube Video Id

保存（或播放）视频时，YouTube 会显示一个 id（例如 ih1l6wb7LhU）。

我们可以使用这个 id，并在 HTML 代码中引用这条视频。

* * *

### 在 HTML 中保费 YouTube 视频

如需在网页上播放视频，请执行以下操作：

  * 将视频上传到 YouTube
  * 记下视频 id
  * 在我们的网页中定义 `<iframe>` 元素
  * 让 `src` 属性指向视频的 URL
  * 使用 `width` 和 `height` 属性来规定播放器的尺寸
  * 向 URL 添加其他参数（参阅下文）

#### 实例

```html <iframe width="420" height="315" src="https://www.youtube.com/embed/ih1l6wb7LhU"> </iframe> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_youtube "亲自试一试")

* * *

### YouTube Autoplay + Mute

我们可以通过在 YouTube URL 上添加 autoplay=1 来让视频在用户访问页面时自动开始播放。但是，自动开始播放视频会让访问者感到烦恼！

注意：在大多数情况下，Chromium 浏览器都不允许自动播放。但始终允许静音自动播放。

在 `autoplay=1` 之后添加 `mute=1`，可让视频自动开始播放（但已静音）。

#### YouTube - Autoplay + Muted

```html <iframe width="420" height="315" src="https://www.youtube.com/embed/ih1l6wb7LhU?autoplay=1&mute=1"> </iframe> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_youtube_autoplay "亲自试一试")

* * *

### YouTube Playlist

以逗号分隔的要播放的视频列表（原始 URL 除外）。

* * *

### YouTube Loop

添加 `loop=1` 会让视频永远循环。

值 0（默认）：视频将播放一次。

值 1：视频将循环（永远）。

#### YouTube - Loop

```html <iframe width="420" height="315" src="https://www.youtube.com/embed/ih1l6wb7LhU?playlist=ih1l6wb7LhU&loop=1"> </iframe> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_youtube_loop "亲自试一试")

* * *

### YouTube Controls

添加 `controls=0` 会使视频播放器不显示控件。

值 0：播放器控件不显示。

值 1（默认）：播放器控件显示。

#### YouTube - Controls

```html <iframe width="420" height="315" src="https://www.youtube.com/embed/ih1l6wb7LhU?controls=0"> </iframe> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_youtube_controls "亲自试一试")
