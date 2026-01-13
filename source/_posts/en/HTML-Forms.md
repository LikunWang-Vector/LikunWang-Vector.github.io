---
title: "HTML Forms - Complete Guide (Attributes, Elements, Input Types)"
date: 2023-02-09
updated: 2023-02-09
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - frontend
  - java
cover: /images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/dd1281408989.png
lang_pair:
  zh-CN: "HTML表单（属性/元素/输入类型/输入属性）：看这一篇就够了"
---

**Table of Contents**

HTML Forms
The `<form>` Element
The `<input>` Element
Text Input
Radio Button Input
Submit Button
Action Attribute
Method Attribute
Name Attribute
Grouping Form Data with `<fieldset>`
Form Attributes
Form Elements
Input Types
Input Attributes

---

## HTML Forms

HTML forms are used to collect different types of user input.

---

### The `<form>` Element

HTML forms are used to collect user input.

The `<form>` element defines an HTML form:

```html
<form>
  form elements
</form>
```

---

### HTML forms contain form elements.

Form elements are different types of input elements, checkboxes, radio buttons, submit buttons, and more.

---

### The `<input>` Element

The `<input>` element is the most important form element.

The `<input>` element can be displayed in several ways, depending on the `type` attribute.

| Type | Description |
|------|-------------|
| text | Defines a single-line text input field |
| radio | Defines a radio button (for selecting one of many choices) |
| submit | Defines a submit button (for submitting the form) |

---

### Text Input

`<input type="text">` defines a single-line input field for text input:

#### Example

```html
<form>
  First name:<br>
  <input type="text" name="firstname">
  <br>
  Last name:<br>
  <input type="text" name="lastname">
</form>
```

**Note:** The form itself is not visible. Also note that the default width of a text input field is 20 characters.

---

### Radio Button Input

`<input type="radio">` defines a radio button.

Radio buttons let a user select ONE of a limited number of choices:

#### Example

```html
<form>
  <input type="radio" name="sex" value="male" checked>Male
  <br>
  <input type="radio" name="sex" value="female">Female
</form>
```

---

### Submit Button

`<input type="submit">` defines a button for submitting the form data to a form-handler.

The form-handler is typically a server page with a script for processing input data.

The form-handler is specified in the form's `action` attribute:

#### Example

```html
<form action="action_page.php">
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="submit" value="Submit">
</form>
```

---

### Action Attribute

The `action` attribute defines the action to be performed when the form is submitted.

Normally, the form data is sent to a web page on the server when the user clicks on the submit button.

```html
<form action="action_page.php">
```

If the action attribute is omitted, the action is set to the current page.

---

### Method Attribute

The `method` attribute specifies the HTTP method (GET or POST) to be used when submitting the form data:

```html
<form action="action_page.php" method="GET">
```

or:

```html
<form action="action_page.php" method="POST">
```

#### When to Use GET?

You can use GET (the default method):

If the form submission is passive (like a search engine query), and without sensitive information.

When you use GET, the form data will be visible in the page address:

```
action_page.php?firstname=Mickey&lastname=Mouse
```

**Note:** GET is best suited for short amounts of data. Browsers set size limitations.

#### When to Use POST?

You should use POST:

If the form is updating data, or includes sensitive information (like passwords).

POST offers better security because the submitted data is not visible in the page address.

---

### Name Attribute

Each input field must have a `name` attribute to be submitted correctly.

This example will only submit the "Last name" input field:

```html
<form action="action_page.php">
  First name:<br>
  <input type="text" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="submit" value="Submit">
</form>
```

---

### Grouping Form Data with `<fieldset>`

The `<fieldset>` element groups related data in a form.

The `<legend>` element defines a caption for the `<fieldset>` element.

#### Example

```html
<form action="action_page.php">
  <fieldset>
    <legend>Personal information:</legend>
    First name:<br>
    <input type="text" name="firstname" value="Mickey">
    <br>
    Last name:<br>
    <input type="text" name="lastname" value="Mouse">
    <br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```

---

### HTML Form Attributes

| Attribute | Description |
|-----------|-------------|
| accept-charset | Specifies the charset used in the submitted form (default: page charset) |
| action | Specifies the address (URL) where to submit the form |
| autocomplete | Specifies if the browser should autocomplete the form (default: on) |
| enctype | Specifies the encoding of the submitted data (default: url-encoded) |
| method | Specifies the HTTP method used when submitting the form (default: GET) |
| name | Specifies a name used to identify the form (for DOM usage: document.forms.name) |
| novalidate | Specifies that the browser should not validate the form |
| target | Specifies the target of the address in the action attribute (default: _self) |

---

## Form Attributes

### Target Attribute

The `target` attribute specifies where to display the response after submitting the form.

| Value | Description |
|-------|-------------|
| _blank | The response is displayed in a new window or tab |
| _self | The response is displayed in the current window |
| _parent | The response is displayed in the parent frame |
| _top | The response is displayed in the full body of the window |
| framename | The response is displayed in a named iframe |

#### Example

```html
<form action="/action_page.php" target="_blank">
```

---

### Autocomplete Attribute

The `autocomplete` attribute specifies whether a form should have autocomplete on or off.

When autocomplete is on, the browser automatically fills in values based on values the user has entered before.

#### Example

```html
<form action="/action_page.php" autocomplete="on">
```

---

### Novalidate Attribute

The `novalidate` attribute is a boolean attribute.

When present, it specifies that the form-data should not be validated on submission.

#### Example

```html
<form action="/action_page.php" novalidate>
```

---

## HTML Form Elements

### The `<select>` Element (Drop-Down List)

The `<select>` element defines a drop-down list:

#### Example

```html
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

The `<option>` element defines an option that can be selected.

By default, the first item in the drop-down list is selected.

To define a pre-selected option, add the `selected` attribute to the option:

```html
<option value="fiat" selected>Fiat</option>
```

---

### The `<textarea>` Element

The `<textarea>` element defines a multi-line input field (a text area):

#### Example

```html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

---

### The `<button>` Element

The `<button>` element defines a clickable button:

#### Example

```html
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```

---

### HTML5 `<datalist>` Element

The `<datalist>` element specifies a list of pre-defined options for an `<input>` element.

Users will see a drop-down list of pre-defined options as they input data.

The `list` attribute of the `<input>` element must refer to the `id` attribute of the `<datalist>` element.

#### Example

```html
<form action="action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>
```

---

## HTML Input Types

### Input Type: text

`<input type="text">` defines a single-line text input field:

```html
<form>
  First name:<br>
  <input type="text" name="firstname">
  <br>
  Last name:<br>
  <input type="text" name="lastname">
</form>
```

---

### Input Type: password

`<input type="password">` defines a password field:

```html
<form>
  User name:<br>
  <input type="text" name="username">
  <br>
  User password:<br>
  <input type="password" name="psw">
</form>
```

**Note:** Characters in a password field are masked (shown as asterisks or circles).

---

### Input Type: submit

`<input type="submit">` defines a button for submitting form data to a form-handler.

```html
<form action="action_page.php">
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="submit" value="Submit">
</form>
```

---

### Input Type: radio

`<input type="radio">` defines a radio button.

Radio buttons let a user select ONLY ONE of a limited number of choices:

```html
<form>
  <input type="radio" name="sex" value="male" checked>Male
  <br>
  <input type="radio" name="sex" value="female">Female
</form>
```

---

### Input Type: checkbox

`<input type="checkbox">` defines a checkbox.

Checkboxes let a user select ZERO or MORE options of a limited number of choices:

```html
<form>
  <input type="checkbox" name="vehicle" value="Bike">I have a bike
  <br>
  <input type="checkbox" name="vehicle" value="Car">I have a car
</form>
```

---

### Input Type: button

`<input type="button">` defines a button:

```html
<input type="button" onclick="alert('Hello World!')" value="Click Me!">
```

---

### HTML5 Input Types

HTML5 added several new input types:

- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

**Note:** Input types not supported by old web browsers will behave as input type text.

---

### Input Type: number

`<input type="number">` is used for input fields that should contain a numeric value.

You can set restrictions on the numbers.

```html
<form>
  Quantity (between 1 and 5):
  <input type="number" name="quantity" min="1" max="5">
</form>
```

---

### Input Restrictions

| Attribute | Description |
|-----------|-------------|
| disabled | Specifies that an input field should be disabled |
| max | Specifies the maximum value for an input field |
| maxlength | Specifies the maximum number of characters for an input field |
| min | Specifies the minimum value for an input field |
| pattern | Specifies a regular expression to check the input value against |
| readonly | Specifies that an input field is read only (cannot be changed) |
| required | Specifies that an input field is required (must be filled out) |
| size | Specifies the width (in characters) of an input field |
| step | Specifies the legal number intervals for an input field |
| value | Specifies the default value for an input field |

---

### Input Type: date

`<input type="date">` is used for input fields that should contain a date.

Depending on browser support, a date picker can show up in the input field.

```html
<form>
  Birthday:
  <input type="date" name="bday">
</form>
```

You can also add restrictions:

```html
<form>
  Enter a date before 1980-01-01:
  <input type="date" name="bday" max="1979-12-31"><br>
  Enter a date after 2000-01-01:
  <input type="date" name="bday" min="2000-01-02"><br>
</form>
```

---

### Input Type: color

`<input type="color">` is used for input fields that should contain a color.

```html
<form>
  Select your favorite color:
  <input type="color" name="favcolor">
</form>
```

---

### Input Type: range

`<input type="range">` is used for input fields that should contain a value within a range.

Depending on browser support, the input field can be displayed as a slider control.

```html
<form>
  <input type="range" name="points" min="0" max="10">
</form>
```

---

### Input Type: month

`<input type="month">` allows the user to select a month and year.

```html
<form>
  Birthday (month and year):
  <input type="month" name="bdaymonth">
</form>
```

---

### Input Type: week

`<input type="week">` allows the user to select a week and year.

```html
<form>
  Select a week:
  <input type="week" name="week_year">
</form>
```

---

### Input Type: time

`<input type="time">` allows the user to select a time (no time zone).

```html
<form>
  Select a time:
  <input type="time" name="usr_time">
</form>
```

---

### Input Type: datetime-local

`<input type="datetime-local">` allows the user to select a date and time (no time zone).

```html
<form>
  Birthday (date and time):
  <input type="datetime-local" name="bdaytime">
</form>
```

---

### Input Type: email

`<input type="email">` is used for input fields that should contain an e-mail address.

Depending on browser support, the e-mail address can be automatically validated when submitted.

```html
<form>
  E-mail:
  <input type="email" name="email">
</form>
```

---

### Input Type: search

`<input type="search">` is used for search fields (a search field behaves like a regular text field).

```html
<form>
  Search Google:
  <input type="search" name="googlesearch">
</form>
```

---

### Input Type: tel

`<input type="tel">` is used for input fields that should contain a telephone number.

```html
<form>
  Telephone:
  <input type="tel" name="usrtel">
</form>
```

---

### Input Type: url

`<input type="url">` is used for input fields that should contain a URL address.

```html
<form>
  Add your homepage:
  <input type="url" name="homepage">
</form>
```

---

## HTML Input Attributes

### value Attribute

The `value` attribute specifies the initial value for an input field:

```html
<form action="">
  First name:<br>
  <input type="text" name="firstname" value="Bill">
</form>
```

---

### readonly Attribute

The `readonly` attribute specifies that the input field is read only (cannot be changed):

```html
<form action="">
  First name:<br>
  <input type="text" name="firstname" value="Bill" readonly>
</form>
```

---

### disabled Attribute

The `disabled` attribute specifies that the input field is disabled.

A disabled element is unusable and un-clickable.

Disabled elements will not be submitted.

```html
<form action="">
  First name:<br>
  <input type="text" name="firstname" value="Bill" disabled>
</form>
```

---

### size Attribute

The `size` attribute specifies the size (in characters) for the input field:

```html
<form action="">
  First name:<br>
  <input type="text" name="firstname" value="Bill" size="40">
</form>
```

---

### maxlength Attribute

The `maxlength` attribute specifies the maximum allowed length for the input field:

```html
<form action="">
  First name:<br>
  <input type="text" name="firstname" maxlength="10">
</form>
```

---

### HTML5 Attributes

HTML5 added the following attributes for `<input>`:

- autocomplete
- autofocus
- form
- formaction
- formenctype
- formmethod
- formnovalidate
- formtarget
- height and width
- list
- min and max
- multiple
- pattern (regexp)
- placeholder
- required
- step

---

### autofocus Attribute

The `autofocus` attribute is a boolean attribute.

When present, it specifies that an `<input>` element should automatically get focus when the page loads.

```html
First name:<input type="text" name="fname" autofocus>
```

---

### placeholder Attribute

The `placeholder` attribute specifies a hint that describes the expected value of an input field.

The hint is displayed in the input field before the user enters a value.

```html
<input type="text" name="fname" placeholder="First name">
```

---

### required Attribute

The `required` attribute is a boolean attribute.

When present, it specifies that an input field must be filled out before submitting the form.

```html
Username: <input type="text" name="usrname" required>
```

---

### pattern Attribute

The `pattern` attribute specifies a regular expression that the `<input>` element's value is checked against.

```html
Country code:
<input type="text" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code">
```

---

### multiple Attribute

The `multiple` attribute is a boolean attribute.

When present, it specifies that the user is allowed to enter more than one value in the `<input>` element.

```html
Select images: <input type="file" name="img" multiple>
```

---

### min and max Attributes

The `min` and `max` attributes specify the minimum and maximum values for an `<input>` element.

```html
Enter a date before 1980-01-01:
<input type="date" name="bday" max="1979-12-31">

Enter a date after 2000-01-01:
<input type="date" name="bday" min="2000-01-02">

Quantity (between 1 and 5):
<input type="number" name="quantity" min="1" max="5">
```

---

### step Attribute

The `step` attribute specifies the legal number intervals for an `<input>` element.

Example: if step="3", legal numbers could be -3, 0, 3, 6, etc.

```html
<input type="number" name="points" step="3">
```

---

### HTML Form and Input Elements

| Tag | Description |
|-----|-------------|
| `<form>` | Defines an HTML form for user input |
| `<input>` | Defines an input control |
