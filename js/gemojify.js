function gemojify(scope) {
  scope = scope || '.gemojify';
  var elementsToReplace = document.querySelectorAll(scope);
  for (var i = 0; i < elementsToReplace.length; i++) {
    elementsToReplace[i].innerHTML = elementsToReplace[i].innerHTML
      .replace(/:([\w-]+):(?![^<]*>)/g, '<span class="emoji emoji-$1"></span>');
  }
}