# Gemojify :star:
A bit of JS that replaces colon :emoji: in HTML with images

## Introduction
First off, a warning. This is my first JavaScript library, it's probably very broken!

This is a front-end library that replaces text inside colons with a `span` element of a particular CSS class that will fetch its corresponding emoji.

e.g. `:smile:` becomes ![smile emoji](https://dl.dropboxusercontent.com/u/13316703/gemojify/smile.png)

The emoji scales to the size of the font, so emoji specified in `<h1>` tags will be larger than those in `<p>` tags.

## Use in your project

Using NPM?

```
npm install gemojify
```

Or just download the repository from GitHub.

Copy the contents of the `css`, `images` and `js` directories into your project.

Inside your HTML, include a reference to `css/gemojify.css` and `js/gemojify.js`, and insert an element with the class `gemojify`.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="css/gemojify.css">
  </head>
  <body>
    <h1 class="gemojify">We :heart: emoji!</h1>
    <p class="gemojify">:thumbsup: This paragraph will be processed :tada:</p>
    <p>This paragraph won't :cry:</p>
    <script src="js/gemojify.js"></script>
  </body>
</html>
```

becomes

![Colon emoji inside the gemojify class are converted to real emoji](https://dl.dropboxusercontent.com/u/13316703/gemojify/gemojify_demo.png)
