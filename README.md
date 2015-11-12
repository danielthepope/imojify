# Gemojify
Front-end library that replaces colon :emoji: with images

## Introduction
This is a front-end library that replaces text inside colons with a `span` element of a particular CSS class that will fetch its corresponding emoji. To find the right colon emoji to use, try [emoji.muan.co](http://emoji.muan.co/). The images themselves were lovingly borrowed from [emoji-cheat-sheet.com](https://github.com/arvida/emoji-cheat-sheet.com/tree/master/public/graphics/emojis) - I really wasn't looking forward to typing all the names manually, then I found this!

e.g. `:smile:` becomes ![smile emoji](https://dl.dropboxusercontent.com/u/13316703/gemojify/smile.png)

The emoji scales to the size of the font, so emoji specified in `<h1>` tags will be larger than those in `<p>` tags.

## Use in your project

Using NPM?

```
npm install gemojify
```

Or just download the repository from GitHub.

Copy the contents of the `css`, `images` and `js` directories into your project.

Inside your HTML, include a reference to `css/gemojify.css` and `js/gemojify.js`. Add an extra `<script>` tag that calls `gemojify()`. If you use that function with no parameters, `gemojify()` will process any HTML tags with the class `gemojify`. Alternatively you can pass your own selector to the function e.g. `gemojify('h1')` to process all `<h1>` tags, or `gemojify('#that-element')` to process the element with id `that-element`.

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
    <script>
      gemojify(); // equivalent to gemojify('.gemojify')
    </script>
  </body>
</html>
```

becomes

![Colon emoji inside the Gemojify class are converted to real emoji](https://dl.dropboxusercontent.com/u/13316703/gemojify/gemojify_demo.png)

## Adding custom emoji
If you're one of those people who thinks "There is no such thing as too much emoji", you can add your own emoji, including animated GIFs!

1. In order to update the CSS, you need `gulp-cli` installed (`npm install gulp-cli -g`).
1. You also need to install the development dependencies: `npm install`
1. Add more images to the `images/emojis` folder, making sure their filenames without extensions don't clash e.g. `smile.png` clashes with `smile.gif` (they would both be applied to the `emoji-smile` class)
1. Finally, run `gulp build`. As if by magic, `gemojify.css` should have been updated with your new images!
