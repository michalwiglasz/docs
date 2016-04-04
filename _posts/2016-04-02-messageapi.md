---
layout: page
title: "Apps and Message API"
category: apps
date: 2016-04-02 18:06:00
---

The primary way of displaying the application's content inside *Mergado* pages is through the use of `IFRAME` elements. Furthermore, these `IFRAMEs` are [sandboxed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox) to eliminate security risks that may arise from using potentially untrusted content inside `IFRAMEs` that are placed in the middle of *Mergado*'s own pages. Since sandboxed `IFRAMEs` cannot speak directly with the rest of the *Mergado* page and *vice versa*, some standard form of JavaScript communication between the app's viewport and the page around it must be defined.

Such standard form of communication is represented by the **Message API** provided by *Mergado* platform. It is through this ***Message Api*** that app's viewport `IFRAME` and *Mergado* wrapper page can communicate with each other.

{: .important}
**Important:** Be advised that -- since it provides some essential information about the contents of viewport, without which Mergado ***cannot*** display the `IFRAME` properly -- the placement and usage of **Message API** in all app's pages and viewports is mandatory. Applications that don't include Mergado Apps **Message API** (or any *equivalent* implementation) in their pages' source code will be deemed unsatisfactory.

## Installation

To use the **Message API** in your app's viewports simply include the appropriate script file provided by *Mergado* into your page's HTML source. You can use either of these:

- The minified version *(recommended)*:
  
  ```html
  <script src="https://app.mergado.com/static/js/apps/MessageApi.min.js" async></script>
  ```
- The non-minified one *(more appropriate for debugging purposes or to see how it works)*:
  
  ```html
  <script src="https://app.mergado.com/static/js/apps/MessageApi.js" async></script>
  ```

## Usage

### What it does by itself
1. **When the `MessageAPI.js` script is loaded:**
After the script is executed, a new global `Mergado` variable containing a singleton object representing the **Message API** is instantly available inside the app's viewport.

2. **When the app's `IFRAME` is loaded:**
   - After its content is loaded (i.e. the `IFRAME`'s `onload` event is fired) *Mergado* wrapper page sends a ***"hello message"*** to the app's `IFRAME`, which is instanteously intercepted by the **Message API** residing inside of it. **Message API** then sends the height of viewport's content back to *Mergado* wrapper page, which then can update `IFRAME`'s height appropriately and the whole content of app's viewport will be visible.
   - All elements having a `data-download="somefileurl"` attribute will have a `onclick` event handler attached. When fired, a message will be sent to the wrapper page which will in turn display up a popup window with URL set to `somefileurl`. This is to overcome the limitations of *Firefox* browser, which is otherwise in most cases unwilling to start a file download from inside of an `IFRAME`.

### What you can do with it
The `Mergado` object has a number of methods which can be used to better your application, improve its usability or overcome any limitations that are the result of strict handling of sandboxed `IFRAME`s by web browsers.

Method | Parameters | Description
------ | ---------- | -----------
`Mergado.tellHeight([int heightInPixels])` | `heightInPixels` (optional): Can be set in pixels (without trailing `px`), `0` or `undefined`. | The *wrapper page* will set height of app's viewport `IFRAME` to this number of pixels. If no height is passed, it will be computed automatically.

{: .warning}
**Warning:** Do not manually *copy & paste* contents of `MessageAPI.js` file into your page's source code. **Always** include the remote `MessageAPI.js` script file provided by *Mergado* platform at `https://app.mergado.com/static/js/apps/MessageApi.js` or `https://app.mergado.com/static/js/apps/MessageApi.min.js`. This way you can be sure you use the most up-to-date version of ***Message API***.
