# Imojify
Front-end library that replaces colon :emoji: with images

## Introduction
This is a front-end library that replaces text inside colons with a `<span>` element of a particular CSS class that will fetch its corresponding emoji. To find the right colon emoji to use, try [emoji.muan.co](http://emoji.muan.co/). The images themselves were lovingly borrowed from [Twitter's Twemoji repository](https://github.com/twitter/twemoji) and the emoji map file is from the [Emoji One project](https://github.com/Ranks/emojione).

e.g. `:smile:` becomes ![smile emoji](https://dl.dropboxusercontent.com/u/13316703/imojify/smile.png)

The emoji scales to the size of the font, so emoji specified in `<h1>` tags will be larger than those in `<p>` tags.

## Use in your project

Using NPM or Bower?

```
npm install imojify
bower install imojify
```

Or just download the repository from GitHub.

Copy the contents of the `css`, `images` and `js` directories into your project.

Inside your HTML, include a reference to `css/imojify.css` and `js/imojify.js`. Add an extra `<script>` tag that calls `imojify()`. If you use that function with no parameters, `imojify()` will process any HTML tags with the class `imojify`. Alternatively you can pass your own selector to the function e.g. `imojify('h1')` to process all `<h1>` tags, or `imojify('#that-element')` to process the element with id `that-element`.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="css/imojify.css">
  </head>
  <body>
    <h1 class="imojify">We :heart: emoji!</h1>
    <p class="imojify">:thumbsup: This paragraph will be processed :tada:</p>
    <p>This paragraph won't :cry:</p>
    <script src="js/imojify.js"></script>
    <script>
      imojify(); // equivalent to imojify('.imojify')
    </script>
  </body>
</html>
```

becomes

![Colon emoji inside the Imojify class are converted to real emoji](https://dl.dropboxusercontent.com/u/13316703/imojify/imojify_demo.png)

## ~~Adding custom emoji~~

** I broke this bit. See [#15](https://github.com/danielthepope/imojify/issues/15) **

If you're one of those people who thinks "There is no such thing as too much emoji", you can add your own emoji, including animated GIFs!

1. You need to install the development dependencies: `npm install`
1. Add more images to the `images/emojis/custom` folder, making sure their filenames without extensions don't clash e.g. `smile.png` clashes with `smile.gif` (they would both be applied to the `emoji-smile` class)
1. Finally, run `npm run build`. As if by magic, `imojify.css` should have been updated with your new images!

## License
Graphics (in `images/emoji` folder): Copyright 2014 Twitter, Inc and other contributors, licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/

emojimap.json is licensed by [Emoji One] (https://github.com/Ranks/emojione) under the MIT license

Everything else is my code, also MIT licensed.
