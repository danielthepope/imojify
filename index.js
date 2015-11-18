var fs = require('fs');
var inline = false;
var output = 'sass/includes/emoji.scss';
var emojiLocation = 'images/emojis';
var emojiMapText = fs.readFileSync('emojimap.json');
var emojiMap = JSON.parse(emojiMapText);
var emojiArray = [];
Object.keys(emojiMap).forEach(function(key) {
  emojiArray.push(emojiMap[key]);
});

fs.writeFileSync(output, ''); // Erase content in current scss file
emojiArray.forEach(function(emoji) {
  var imagePath = emojiLocation + '/' + emoji.unicode + '.svg';
  if (fs.existsSync(imagePath)) {
    var cssClass = '.emoji-' + emoji.shortname;
    emoji.aliases.forEach(function(alias) {
      cssClass += ', .emoji-' + alias;
    });
    cssClass = cssClass.replace(/:/g,'').replace(/\+/g,'_');
    var sass = cssClass + ' {\n  background-image: url("../' + imagePath + '");\n}\n\n';
    fs.appendFileSync(output, sass);
  } else {
    console.warn(emoji.shortname + ' (' + imagePath + ') does not exist');
  }
})

console.log('done');
