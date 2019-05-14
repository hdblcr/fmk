function loadList() {
  return fetch("https://hdblcr.github.io/shipit/SDSAllStars.txt")
    .then( response => response.text());
}

function select () {
  var characterList = loadList();
  var total = length(characterList);
  var character1 = Math.floor(Math.random() * total);
  do {
    var character2 = Math.floor(Math.random() * total);
  } while (character1 === character2);
  var node = document.getElementById('characters');
  node.innerHTML('<p>')
  node.innerHTML(characterList[character1]);
  node.innerHTML(' and ');
  node.innerHTML(characterList[character2]);
  node.innerHTML('!</p>')
}
