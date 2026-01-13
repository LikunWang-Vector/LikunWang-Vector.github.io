---
title: "HTML Responsive Web Design"
date: 2022-12-27
updated: 2022-12-27
categories:
  - HTML Beginner to Advanced
tags:
  - frontend
  - html
  - bootstrap
  - html5
lang_pair:
  zh-CN: "HTML响应式Web设计"
---

**Table of Contents**

What is Responsive Web Design?

Creating Your Own Responsive Design

Using Bootstrap

---

### What is Responsive Web Design?

- RWD stands for Responsive Web Design
- RWD can deliver web pages in variable sizes
- RWD is essential for tablets and mobile devices

---

### Creating Your Own Responsive Design

One way to create a responsive design is to create it yourself:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
.city {
  float: left;
  margin: 5px;
  padding: 15px;
  width: 300px;
  height: 300px;
  border: 1px solid black;
}
</style>
</head>
<body>

<h1>Responsive Demo</h1>
<h2>Resize this responsive page!</h2>
<br>

<div class="city">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>It is the most populous city in the United Kingdom,
  with a metropolitan area of over 13 million inhabitants.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital and most populous city of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
  and the most populous metropolitan area in the world.</p>
</div>

</body>
</html>
```

---

### Using Bootstrap

Another way to create a responsive design is to use an existing CSS framework.

Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive web.

Bootstrap helps you develop sites that look great at any size: monitors, laptops, tablets, or phones:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" 
    href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
</head>
<body>

<div class="container">
  <div class="jumbotron">
    <h1>Responsive Demo</h1>
    <p>Resize this responsive page!</p>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-4">
      <h2>London</h2>
      <p>London is the capital city of England.</p>
      <p>It is the most populous city in the United Kingdom,
      with a metropolitan area of over 13 million inhabitants.</p>
    </div>
    <div class="col-md-4">
      <h2>Paris</h2>
      <p>Paris is the capital and most populous city of France.</p>
    </div>
    <div class="col-md-4">
      <h2>Tokyo</h2>
      <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
      and the most populous metropolitan area in the world.</p>
    </div>
  </div>
</div>

</body>
</html>
```

To learn more about Bootstrap, you can refer to the Bootstrap Tutorial.
