var fs = require('fs');
var inline = false;
var output = 'sass/includes/emoji-' + (inline ? 'inline' : 'url') + '.scss';
var emojiLocation = 'images/emojis';

String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

fs.writeFileSync(output, '');
var files = fs.readdirSync(emojiLocation);
files.forEach(function(element) {
  if (element.endsWith('.png')) {
    var name = element.split('.')[0].replace('+','_');
    var sass = '';
    if (inline) {
      var data = fs.readFileSync(emojiLocation + '/' + element);
      var b64 = new Buffer(data).toString('base64');
      sass = '.emoji-'+name+' {\n  background-image:url(data:image/png;base64,'+b64+');\n}\n\n';
    } else {
      sass = '.emoji-'+name+' {\n  background-image: url("../' + emojiLocation + '/' + element + '");\n}\n\n';
    }
    fs.appendFileSync(output, sass);
  }
});