function imojify(scope, options) {
  scope = scope || '.imojify';
  options = options || {};
  var emojiRe = /:([\w-\+]+):/g;
  var underscoreRe = /_/g;
  var cssEmojis;
  var elementsToReplace = document.querySelectorAll(scope);
  var elementsToIgnore = document.querySelectorAll(options.ignore);
  for (var i = 0; i < elementsToReplace.length; i++) {
    imojify_node(elementsToReplace[i]);
  }

  function emojiExists(selector) {
    // find any emojis that have css rules to support them
    if(!cssEmojis){
      cssEmojis = {};
      var selectorRe = /\.emoji-(\w+)/g, m;
      var sheets = document.styleSheets;
      for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
          if(rules[r].type == CSSRule.STYLE_RULE){
            while(m = selectorRe.exec(rules[r].selectorText)){
              cssEmojis[m[1]] = true;
            }
          }
        }
      }
    }

    return cssEmojis[selector.trim()]
  }

  function imojify_node(node) {
    if (node.constructor === Text) {
      node.data.replace(emojiRe, function (match, emojiName) {
        var escapedEmojiName = emojiName.replace('+','_');
        if (emojiExists(escapedEmojiName)) {
          // If there is :emoji:, we need to insert a span element.
          // But in order to do that, we have to create a new Text node for the
          //  text before the colon, a span replacing the content inside the
          //  colons, and text node we were operating on should be replaced by
          //  whatever we've got left.
          var pre = node.data.substring(0, node.data.indexOf(match));
          var post = node.data.substring(node.data.indexOf(match) + match.length);
          var textNode = document.createTextNode(pre);
          var emojiNode = document.createElement('span');
          emojiNode.className = "emoji emoji-" + escapedEmojiName;
          emojiNode.setAttribute('aria-label', 'Emoji: ' + emojiName.replace(underscoreRe, ' ') + '.');
          emojiNode.setAttribute('title', match);
          node.parentNode.insertBefore(textNode, node);
          node.parentNode.insertBefore(emojiNode, node);
          node.data = post;
        }
      });
    } else if (node.constructor === HTMLScriptElement || [].indexOf.call(elementsToIgnore, node) >= 0) {
      // Don't process text inside script tags or ignored elements
      return;
    } else {
      var childNodes = node.childNodes;
      for (var i = 0; i < childNodes.length; i++) {
        imojify_node(childNodes[i]);
      }
    }
  }
}
