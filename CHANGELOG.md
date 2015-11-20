# v0.0.5
*2015/11/20*
- Replaced Gemoji with Twemoji
- Renamed project from Gemojify to Imojify. All functions and class names have been renamed to reflect this
- Added ignore selector to prevent applying `imojify()` inside certain elements
- Created spans have `title` and `aria-label` attributes for accessibility
- Custom emoji must be placed in the images/emoji/custom folder, like `upside_down_face.svg`
- Use `npm run build` instead of `gulp build` in instructions
- Performance improvements

# v0.0.4
*2015/11/12*
- Pass in scope with a CSS selector - you can now call gemojify('body') if you want ('.gemojify' by default)
- Checks to see if the CSS class exists before replacing the colon text with a span
- Allows any image format
- Adds support for non-square emoji
- Fixed issue where text inside attributes might have been replaced by emoji
- Fixed issue with :+1: emoji not working

# v0.0.3
*2015/11/10*
- Uses Gemoji images from emoji-cheat-sheet.com
- Replaces all instances of text inside colons
