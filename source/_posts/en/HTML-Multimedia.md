---
title: "HTML Multimedia - Complete Guide (Plugins, Audio, Video, YouTube)"
date: 2023-02-10
updated: 2023-02-10
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - audio-video
  - frontend
  - frontend-framework
  - media
lang_pair:
  zh-CN: "HTML多媒体（插件/音频/视频/YouTube）：一篇就够用"
---

**Table of Contents**

HTML Media
HTML Plugins
HTML Audio
HTML Video
HTML YouTube

---

## HTML Media

Multimedia on the web is sound, music, videos, movies, and animations.

Modern web browsers have built-in support for many multimedia formats.

### What is Multimedia?

Multimedia comes in many different formats. It can be almost anything you can hear or see, like images, music, sound, videos, records, films, animations, and more.

Web pages often contain multimedia elements of different types and formats.

### Multimedia Formats

Multimedia elements (like audio and video) are stored in media files.

The most common way to discover the type of a file is to look at the file extension.

Multimedia files have formats and different extensions like: .wav, .mp3, .mp4, .mpg, .wmv, and .avi.

### Video Formats

| Format | File | Description |
|--------|------|-------------|
| MPEG | .mpg, .mpeg | MPEG. Developed by the Moving Pictures Expert Group. The first popular video format on the web. |
| AVI | .avi | AVI (Audio Video Interleave). Developed by Microsoft. Commonly used in video cameras and TV hardware. |
| WMV | .wmv | WMV (Windows Media Video). Developed by Microsoft. |
| QuickTime | .mov | QuickTime. Developed by Apple. |
| RealVideo | .rm, .ram | RealVideo. Developed by Real Media. Allows video streaming with low bandwidths. |
| Flash | .swf, .flv | Flash. Developed by Macromedia. Often requires an extra component (plug-in) to play in web browsers. |
| MP4 | .mp4 | MP4. Developed by the Moving Pictures Expert Group. Based on QuickTime. Commonly supported in newer browsers. |

### Audio Formats

| Format | File | Description |
|--------|------|-------------|
| MIDI | .mid, .midi | MIDI (Musical Instrument Digital Interface). Main format for all electronic music devices. |
| RealAudio | .rm, .ram | RealAudio. Developed by Real Media. Allows audio streaming with low bandwidths. |
| WMA | .wma | WMA (Windows Media Audio). Developed by Microsoft. |
| AAC | .aac | AAC (Advanced Audio Coding). Developed by Apple as the default format for iTunes. |
| WAV | .wav | WAV. Developed by IBM and Microsoft. |
| Ogg | .ogg | Ogg. Developed by the Xiph.Org Foundation. |
| MP3 | .mp3 | MP3 files are actually the sound part of MPEG files. MP3 is the most popular format for music players. |

---

## HTML Plugins

Plug-ins are computer programs that extend the standard functionality of the browser.

### Plugins

Plug-ins were designed to be used for many different purposes:

- To run Java applets
- To run Microsoft ActiveX controls
- To display Flash movies
- To display maps
- To scan for viruses
- To verify a bank id

**Warning!**

Most browsers no longer support Java Applets and Plug-ins.

ActiveX controls are no longer supported in any browsers.

The support for Shockwave Flash has also been turned off in modern browsers.

### The `<object>` Element

The `<object>` element is supported by all browsers.

The `<object>` element defines an embedded object within an HTML document.

It was designed to embed plug-ins (like Java applets, PDF readers, and Flash Players) in web pages, but can also be used to include HTML in HTML:

```html
<object width="100%" height="500px" data="snippet.html"></object>
```

Or images:

```html
<object data="audi.jpeg"></object>
```

### The `<embed>` Element

The `<embed>` element is supported in all major browsers.

The `<embed>` element also defines an embedded object within an HTML document.

```html
<embed src="audi.jpeg">
```

Note that the `<embed>` element does not have a closing tag. It can not contain alternative text.

---

## HTML Audio

There are many ways to play audio in HTML.

### Using The `<audio>` Element

The `<audio>` element is an HTML5 element.

```html
<audio controls="controls">
  <source src="song.mp3" type="audio/mp3" />
  <source src="song.ogg" type="audio/ogg" />
  Your browser does not support this audio format.
</audio>
```

The example above uses an mp3 file, which works in Internet Explorer, Chrome, and Safari.

To make the audio work in Firefox and Opera, an ogg file is added. If it fails, an error message is displayed.

### Best HTML Solution

```html
<audio controls="controls" height="100" width="100">
  <source src="song.mp3" type="audio/mp3" />
  <source src="song.ogg" type="audio/ogg" />
  <embed height="100" width="100" src="song.mp3" />
</audio>
```

The example above uses two different audio formats. The HTML5 `<audio>` element tries to play the audio in mp3 or ogg format. If it fails, the code falls back to try the `<embed>` element.

### Using A Hyperlink

If a web page contains a hyperlink to a media file, most browsers will use a "helper application" to play the file.

```html
<a href="song.mp3">Play the sound</a>
```

---

## HTML Video

There are many ways to play video in HTML.

### Using The `<video>` Element

The `<video>` element is an HTML5 element.

```html
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
```

### Best HTML Solution

HTML 5 + `<object>` + `<embed>`

```html
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  <object data="movie.mp4" width="320" height="240">
    <embed src="movie.swf" width="320" height="240" />
  </object>
</video>
```

The example above uses 4 different video formats. The HTML5 `<video>` element tries to play the video in mp4, ogg, or webm format. If it fails, the code falls back to try the `<embed>` element.

### Using A Hyperlink

If a web page contains a hyperlink to a media file, most browsers will use a "helper application" to play the file.

```html
<a href="movie.swf">Play a video file</a>
```

---

## HTML YouTube

The easiest way to play videos in HTML is to use YouTube.

### YouTube Video Id

When you save (or play) a video, YouTube will display an id (like ih1l6wb7LhU).

You can use this id, and refer to your video in the HTML code.

### Playing a YouTube Video in HTML

To play your video on a web page, do the following:

- Upload the video to YouTube
- Take a note of the video id
- Define an `<iframe>` element in your web page
- Let the `src` attribute point to the video URL
- Use the `width` and `height` attributes to specify the dimension of the player
- Add any other parameters to the URL (see below)

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/ih1l6wb7LhU">
</iframe>
```

### YouTube Autoplay + Mute

You can let your video start playing automatically when a user visits the page, by adding `autoplay=1` to the YouTube URL. However, automatically starting a video is annoying for your visitors!

Note: Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.

Add `mute=1` after `autoplay=1` to let your video start playing automatically (but muted).

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/ih1l6wb7LhU?autoplay=1&mute=1">
</iframe>
```

### YouTube Loop

Add `loop=1` to let your video loop forever.

Value 0 (default): The video will play only once.

Value 1: The video will loop (forever).

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/ih1l6wb7LhU?playlist=ih1l6wb7LhU&loop=1">
</iframe>
```

### YouTube Controls

Add `controls=0` to not display controls in the video player.

Value 0: Player controls does not display.

Value 1 (default): Player controls display.

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/ih1l6wb7LhU?controls=0">
</iframe>
```

---

### HTML Multimedia Tags

| Tag | Description |
|-----|-------------|
| `<audio>` | Defines sound content |
| `<video>` | Defines a video or movie |
| `<source>` | Defines multiple media resources for media elements |
| `<embed>` | Defines a container for an external application |
| `<object>` | Defines an embedded object |
| `<param>` | Defines a parameter for an object |
