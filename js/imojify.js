function imojify(scope) {
  scope = scope || '.imojify';
  var classCache = [];
  var elementsToReplace = document.querySelectorAll(scope);
  for (var i = 0; i < elementsToReplace.length; i++) {
    imojify_node(elementsToReplace[i]);
  }

  function cssRuleExists(selector) {
    var sheets = document.styleSheets;

    if (classCache.indexOf(selector.trim()) >= 0) {
      return true;
    }

    for (var i in sheets) {
      var rules = sheets[i].rules || sheets[i].cssRules;
      for (var r in rules) {
        if (rules[r].selectorText === selector.trim()) {
          classCache.push(selector.trim());
          return true;
        }
      }
    }

    return false;
  }

  function imojify_node(node) {
    if (node.constructor === Text) {
      var matches = node.data.match(/:[\w-\+]+:/g);
      if (!matches) return;
      matches.forEach(function (match) {
        var emojiName = match.replace(/:/g, '').replace('+','_');
        if (cssRuleExists('.emoji-' + emojiName)) {
          // If there is :emoji:, we need to insert a span element.
          // But in order to do that, we have to create a new Text node for the
          //  text before the colon, a span replacing the content inside the
          //  colons, and text node we were operating on should be replaced by
          //  whatever we've got left.
          var pre = node.data.substring(0, node.data.indexOf(match));
          var post = node.data.substring(node.data.indexOf(match) + match.length);
          var textNode = document.createTextNode(pre);
          var emojiNode = document.createElement('span');
          emojiNode.className = "emoji emoji-" + emojiName;
          node.parentNode.insertBefore(textNode, node);
          node.parentNode.insertBefore(emojiNode, node);
          node.data = post;
        }
      });
    } else if (node.constructor === HTMLScriptElement) {
      // Don't process text inside script tags
      return;
    } else {
      var childNodes = node.childNodes;
      for (var i = 0; i < childNodes.length; i++) {
        imojify_node(childNodes[i]);
      }
    }
  }
}
