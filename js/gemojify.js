function gemojify() {
  var elementsToReplace = document.getElementsByClassName('gemojify');
  for (var i = 0; i < elementsToReplace.length; i++) {
    var newText = elementsToReplace[i].innerHTML;
    var matches = newText.match(/:[\w_-]+:/g);
    matches.forEach(function (match) {
      var matchRegExp = new RegExp(match, 'g');
      var emojiName = match.replace(/:/g, '');
      var emojiSpan = '<span class="emoji emoji-' + emojiName + '"></span>';
      newText = newText.replace(matchRegExp, emojiSpan);
    });
    elementsToReplace[i].innerHTML = newText;
  }
}

gemojify();
