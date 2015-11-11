function gemojify() {
  var elementsToReplace = document.getElementsByClassName('gemojify');
  for (var i = 0; i < elementsToReplace.length; i++) {
    elementsToReplace[i].innerHTML = elementsToReplace[i].innerHTML
      .replace(/:([\w-]+):(?![^<]*>)/g, '<span class="emoji emoji-$1"></span>');
  }
}

gemojify();
