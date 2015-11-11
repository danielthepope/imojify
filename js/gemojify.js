function gemojify() {
  var elementsToReplace = document.getElementsByClassName('gemojify');
  for (var i = 0; i < elementsToReplace.length; i++) {
    gemojify_node(elementsToReplace[i]);
  }
}

function gemojify_node(node) {
  if (node.constructor === Text) {
    var matches = node.data.match(/:[\w-]+:/g);
    if (!matches) return;
    matches.forEach(function (match) {
      var emojiName = match.replace(/:/g, '');
      var pre = node.data.substring(0,node.data.indexOf(match));
      var post = node.data.substring(node.data.indexOf(match) + match.length);
      var textNode = document.createTextNode(pre);
      var emojiNode = document.createElement('span');
      emojiNode.className = "emoji emoji-"+emojiName;
      node.parentNode.insertBefore(textNode,node);
      node.parentNode.insertBefore(emojiNode,node);
      node.data = post;
    });
  } else {
    var childNodes = node.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      gemojify_node(childNodes[i]);
    }
  }
}

gemojify();
