---
title: "Fixing Jekyll Installation Issues with Gem on Windows"
date: 2023-09-10
updated: 2023-09-10
categories:
  - Debug Notes
tags:
  - gem
  - Jekyll
  - blog
cover: /images/posts/windows在gem下安装jekyll的问题/a60c17eded1c.png
lang_pair:
  zh-CN: "windows在gem下安装jekyll的问题"
---

## Problem Scenario

When installing Jekyll, the following error was thrown:

```
ERROR: While executing gem … (Gem::RemoteFetcher::FetchError)
IO::TimeoutError: Failed to open TCP connection to gems.ruby-china.com:443
(https://gems.ruby-china.com/quick/Marshal.4.8/jekyll-0.1.6.gemspec.rz)
(Gem::RemoteFetcher::FetchError)
```

## Problem Description

The error "Failed to open TCP connection to gems.ruby-china.com:443" indicates a network connection timeout when executing the gem command. This error is likely caused by issues with the gem source.

## Cause Analysis

Network connection timeout when executing gem command, possibly due to gem source problems.

## Solution

To resolve this issue, try the following steps:

1. **Remove the original gem source**:
   ```bash
   gem sources --remove https://rubygems.org/
   ```

2. **Add a new gem source**:
   ```bash
   gem sources -a https://gems.ruby-china.com/
   ```

3. **Verify current gem sources**:
   ```bash
   gem sources -l
   ```
   Ensure the new source was successfully added and is the only source.

4. **Don't worry if cmd appears frozen** - it's just downloading. Be patient and wait for completion.

![](/images/posts/windows在gem下安装jekyll的问题/a60c17eded1c.png)

## Additional Note

My original error was caused by changing network proxy settings, which prevented connection. It wasn't related to the API itself. Just follow the configuration above and it should work.
