function gemojify() {
  var elementsToReplace = document.getElementsByClassName('gemojify');
  for (var i = 0; i < elementsToReplace.length; i++) {
    elementsToReplace[i].innerHTML = elementsToReplace[i].innerHTML
      .replace(':+1:', ':_1:') // special character not compatible with CSS
      .replace(/:([\w-]+):(?![^<]*>)/g, '<span class="emoji emoji-$1"></span>');
  }
}

gemojify();
