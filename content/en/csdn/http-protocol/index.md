---
type: post
csdn: true
title: "03. HTTP Protocol"
date: "2022-12-28"
lastmod: "2022-12-28"
authors:
  - admin
tags:
  - "http"
  - "network"
  - "protocol"
  - "frontend"
  - "crawler"
  - "CSDN"
categories:
  - "Python Web Crawler Tutorial"
summary: "Protocol: A gentleman's agreement set up between two computers to enable smooth communication. Common protocols include TCP/IP, SOAP, HTTP, SMTP, and more..."
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128468761"
csdn_views: 299
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 3
---

> This article was migrated from CSDN blog
> Original link: [03. HTTP协议](https://blog.csdn.net/m0_59180666/article/details/128468761)


## HTTP Protocol

* * *

### Basic Concepts

Protocol: A gentleman's agreement set up between two computers to enable smooth communication. Common protocols include TCP/IP, SOAP, HTTP, SMTP, and more...

HTTP: **H**yper **T**ext **T**ransfer **P**rotocol - the protocol that browsers and servers follow for data exchange. It's used to transfer hypertext from World Wide Web (WWW) servers to local browsers.

The HTTP protocol divides a message into three main parts, whether it's a request or response:

#### Request:

```
Request Line -> Request method (GET/POST), request URL address, protocol
Request Headers -> Additional information for the server to use
Request Body -> Usually contains request parameters
```

#### Response:

```
Status Line -> Protocol, status code
Response Headers -> Additional information for the client to use
Response Body -> The actual content the server returns for the client (HTML/JSON, etc.)
```

When writing crawlers later, pay special attention to **request headers and response headers** - these two places usually contain important hidden information.

![](/images/posts/03.-HTTP协议/f61691304ef4.png)

![](/images/posts/03.-HTTP协议/3c2ee9f06df1.png)

* * *

### Important Content in Request Headers (Needed for Crawling):

1\. User-Agent: Identity of the request carrier (what sent the request)

2\. Referer: Anti-hotlinking (which page did this request come from? Used for anti-crawling)

3\. Cookie: Local string data information (user login info, anti-crawling tokens)

* * *

### Important Content in Response Headers:

1\. Cookie: Local string data information (user login info, anti-crawling tokens)

2\. Various mysterious strings (requires experience, usually token-related, preventing various attacks and anti-crawling)

* * *

### Request Methods:

GET: Explicit submission (queries)

POST: Implicit submission (modifications)

* * *

### Summary

```
# HTTP: Hyper Text Transfer Protocol - the protocol that browsers and servers follow for data exchange
# HTTP divides a message into three main parts, both requests and responses have three parts
# Request: Request line (method GET/POST, URL, protocol), Request headers (additional info for server), Request body (parameters)
# Response: Status line (protocol, status code), Response headers (additional info for client), Response body (actual content like HTML, JSON)
# Important content in request headers (needed for crawling):
# User-Agent (UA): Identity of the request carrier (what sent the request)
# Referer: Anti-hotlinking (which page did this request come from? Used for anti-crawling)
# Cookie: Local string data (user login info, anti-crawling tokens)
# Important content in response headers:
# Cookie: Local string data (user login info, anti-crawling tokens)
# Various mysterious strings (requires experience, usually token-related, preventing attacks and anti-crawling)
# Request methods:
# GET: Explicit submission (queries, etc.)
# POST: Implicit submission (modifications, etc.)
```
