var fs = require('fs');
var outputFile = 'sass/includes/emoji.scss';
var emojiLocation = 'images/emojis';
var customEmojiLocation = emojiLocation + '/custom';
var useTwemoji = true;
var useCustom = true; 
var allColonsRE = /:/g;
var plussesAndSpacesRE = /[\+ ]/g;

var emojiMapText = fs.readFileSync('emojimap.json');
var emojiMap = JSON.parse(emojiMapText);
var emojiArray = [];
var emojiArray = Object.keys(emojiMap).map(function(key) {
  return emojiMap[key];
});

var outputSass = '';
if (useTwemoji) {
  emojiArray.forEach(function(emoji) {
    var imagePath = emojiLocation + '/' + emoji.unicode + '.svg';
    if (fs.existsSync(imagePath)) {
      var sass = generateCssClass(imagePath, emoji.shortname, emoji.aliases);
      outputSass += sass;
    } else {
      console.warn(emoji.shortname + ' (' + imagePath + ') does not exist');
    }
  });
}
if (useCustom) {
  if (fs.existsSync(customEmojiLocation)) {
    var customFiles = fs.readdirSync(customEmojiLocation);
    customFiles.forEach(function(file) {
      outputSass += generateCssClass(customEmojiLocation + '/' + file);
    });
  } else {
    console.warn('Custom emoji location doesn\'t exist! ' + customEmojiLocation);
  }
}
fs.writeFileSync(outputFile, outputSass); // Replace content in current sass file

/**
 * Returns a string of CSS for the given image.
 * emojiName and emojiAliasArray are optional
 * If emojiName is not specified, it is derived from the file name.
 */
function generateCssClass(imageLocation, emojiName, emojiAliasArray) {
  if (!emojiName) {
    emojiName = sanitiseClass(getFileName(imageLocation))
  }
  var cssClass = '.emoji-' + sanitiseClass(emojiName);
  if (emojiAliasArray && emojiAliasArray.constructor === Array) {
    emojiAliasArray.forEach(function(alias) {
      cssClass += ', .emoji-' + sanitiseClass(alias);
    });
  }
  return cssClass + ' {\n  background-image: url("../' + imageLocation + '");\n}\n\n';
  
}

/**
 * Deletes any colons, replaces spaces and plusses with underscores
 */
function sanitiseClass(cssClass) {
  return cssClass.replace(allColonsRE, '').replace(plussesAndSpacesRE, '_');
}

/**
 * Returns a file's name without its extension.
 * e.g. 'path/to/file.png' returns 'file'
 */
function getFileName(path) {
  if (!path) return '';
  var directories = path.split('/');
  return directories[directories.length-1].split('.')[0];
}

console.log('done');
