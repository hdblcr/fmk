function txt2list(text) {
  ary = text.split("\r\n");
  console.log(ary);
  return ary;
}

function loadList() {
  // var text = fetch("https://hdblcr.github.io/shipit/SDSAllStars.txt")
  //   .then( response => response.text());
  fetch("./SDSAllStars.txt")
    // .then( function(response){
    //   console.log(response.text());
    //   // doThings(txt2list(response.text()));
    // })
    .then(function(response){
      // console.log("response.text");
      // console.log(response.text());
      return response.text();
      // doThings(txt2list(value));
    })
    .then(function(text) {
      doThings(txt2list(text));
    });
}

function select() {
  loadList();
}

function doThings(characterList) {
  var total = characterList.length;
  var character1 = Math.floor(Math.random() * total);
  do {
    var character2 = Math.floor(Math.random() * total);
  } while (character1 === character2);

  var p = "<p>";
  var toWrite = p.concat('', characterList[character1], ' and ', characterList[character2], '!</p>');

  document.getElementById("characters").innerHTML = toWrite;
  // htmlnode.innerHTML('<p>');
  // htmlnode.innerHTML(characterList[character1]);
  // htmlnode.innerHTML(' and ');
  // htmlnode.innerHTML(characterList[character2]);
  // htmlnode.innerHTML('!</p>');
}
