---
title: "Master Python Debugger pdb in 10 Minutes"
date: 2025-09-19
updated: 2025-09-19
categories:
  - Debug Notes
tags:
  - python
  - pdb
  - debug
lang: en
cover: /images/posts/10分钟掌握Python调试器pdb/0d565b653736.png
lang_pair:
  zh-CN: "10分钟掌握Python调试器pdb"
---

> This article was migrated from CSDN blog
> Original link: [10分钟掌握Python调试器pdb](https://blog.csdn.net/m0_59180666/article/details/151854829)

If you're still mainly using print statements to debug your code, it's worth spending 10 minutes trying pdb - Python's built-in debugging tool.

![](/images/posts/10分钟掌握Python调试器pdb/0d565b653736.png)

pdb has 2 usage methods:

* **Non-invasive method** (no need to modify source code, debug directly from command line)

```
python3 -m pdb filename.py
```

* **Invasive method** (need to add one line of code to the code being debugged, then run normally)

```
import pdb;pdb.set_trace()
```

When you see the following prompt in the command line, pdb has been successfully opened:

```
(Pdb)
```

Then you can start entering pdb commands. Here are the commonly used pdb commands:

### 1. View Source Code

Command:

```
l
```

Description:

> View 11 lines of source code around the current position (multiple uses will page through)
> The current position is marked with --> in the code

Command:

```
ll
```

Description:

> View all source code of the current function or frame

### 2. Add Breakpoints

Command:

```
b
b lineno
b filename:lineno
b functionname
```

Parameters:

> filename: which file to add the breakpoint to, e.g., test.py
> lineno: which line to add the breakpoint to
> function: function name, set breakpoint at the first line of the function

Description:

> 1. Without parameters: view breakpoint settings
> 2. With parameters: set a breakpoint at the specified location

### 3. Add Temporary Breakpoints

Command:

```
tbreak
tbreak lineno
tbreak filename:lineno
tbreak functionname
```

Parameters:

> Same as b

Description:

> Automatically deleted after executing once (that's why it's called a temporary breakpoint)

### 4. Clear Breakpoints

Command:

```
cl
cl filename:lineno
cl bpnumber [bpnumber ...]
```

Parameters:

> bpnumber: breakpoint number (multiple separated by spaces)

Description:

> 1. Without parameters: clear all breakpoints, will prompt for confirmation (including temporary breakpoints)
> 2. With parameters: clear breakpoints at specified file line or specified number in current file

### 5. Print Variable Values

Command:

```
p expression
```

Parameters:

> expression: Python expression

### 6. Step-by-Step Debugging Commands

Includes s, n, r - these 3 similar commands differ in how they handle functions

Command 1:

```
s
```

Description:

> Execute next line (can enter function body)

Command 2:

```
n
```

Description:

> Execute next line (won't enter function body)

Command 3:

```
r
```

Description:

> Execute next line (when in a function, will execute directly to function return)

### 7. Non-Step-by-Step Debugging Commands

Command 1:

```
c
```

Description:

> Continue execution until encountering a breakpoint

Command 2:

```
unt lineno
```

Description:

> Continue execution until reaching the specified line (or encountering a breakpoint)

Command 3:

```
j lineno
```

Description:

> Jump directly to the specified line (note: skipped code is not executed)

### 8. View Function Parameters

Command:

```
a
```

Description:

> When in a function, print the function's parameters and their values

### 9. Print Variable Type

Command:

```
whatis expression
```

Description:

> Print the type of the expression, commonly used to print variable types

### 10. Start Interactive Interpreter

```
interact
```

Description:

> Start a Python interactive interpreter using the current code's global namespace (use ctrl+d to return to pdb)

### 11. Print Stack Information

```
w
```

Description:

> Print stack information, newest frame at the bottom. Arrow indicates current frame.

### 12. Exit pdb

```
q
```

Done. Okay, it might have taken more than 10 minutes - I admit that was a white lie. But now you've mastered it. High five!
