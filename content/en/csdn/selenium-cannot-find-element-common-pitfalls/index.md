---
type: post
csdn: true
title: "Selenium: Can't Find Web Elements? Common Pitfalls"
date: "2023-03-19"
lastmod: "2023-03-19"
authors:
  - admin
tags:
  - "javascript"
  - "frontend"
  - "programming"
  - "selenium"
  - "python"
  - "CSDN"
categories:
  - "Debug Notes"
summary: "Usually when using XPath, we can use @class to directly get node attributes:"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/129658561"
csdn_views: 1215
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [Selenium: Can't Find Web Elements? Common Pitfalls](https://blog.csdn.net/m0_59180666/article/details/129658561)
> 📊 1215 views | 👍 1 likes | 💬 1 comments | ⭐ 2 favorites

## 1. Cannot Directly Get Node Attributes with XPath

Usually when using XPath, we can use `@class` to directly get node attributes:

```python
page.xpath('//div/a/@class')
```

But **Selenium doesn't support this usage**. You can only use the `get_attribute(name)` method after finding the node:

```python
page.xpath('//div/a').get_attribute('class')
```

Similarly, Selenium doesn't support XPath methods like `string()` and `text()`. You can only get element nodes.

---

## 2. Still Can't Find Element After Using WebDriverWait

Many times, a simple element clearly has explicit wait added, but still can't be found. After carefully checking the code and finding no issues, it's likely one of these situations:

1. Due to resolution settings, the element is currently not visible
2. Some page elements only load when scrolling down
3. Due to temporary blocking by other elements, the target can't be located

### 2.1. Resolution Issues

Set the resolution properly so the current element can be displayed on the page.

### 2.2. Need to Scroll Page

Some pages, for performance reasons, don't load elements below the current screen. They only load when the page scrolls down.

Selenium itself doesn't provide a scroll method, so we need to use JavaScript to scroll:

```python
driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
```

Some scroll methods found online don't work on Chrome, but this one does.

### 2.3. Blocked by Other Elements

Sometimes due to popup elements, if we still use `EC.presence_of_element_located()`, the element we need to locate can't be found. In this case, we should change our element detection method:

```python
element = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.XPATH, ''))
)
```

Using `EC.visibility_of_element_located()` method waits until the current element is visible before getting it.

When we can't find an element or can't interact with it, we should flexibly choose the explicit wait judgment method based on the current situation.
