function txt2list(text) {
  ary = text.split("\r\n");
  console.log(ary);
  return ary;
}

function loadList() {
  // var text = fetch("https://hdblcr.github.io/shipit/SDSAllStars.txt")
  //   .then( response => response.text());
  fetch("./SDSAllStars.txt")
    .then(function(response){
      return response.text();
    })
    .then(function(text) {
      doThings(txt2list(text));
    });
}

function select() {
  loadList();
}

function doThings(list1, list2) {
  var total1 = list1.length;
  var c1 = Math.floor(Math.random() * total);
  var total2 = list2.length;
  var c1 = Math.floor(Math.random() * total);
  // do {
  //   var character2 = Math.floor(Math.random() * total);
  // } while (character1 === character2);

  var p = "<p><b>";
  var toWrite = p.concat('', list1[c1], '</b> and <b>', list2[c2], '</b>!</p>');

  document.getElementById("characters").innerHTML = toWrite;
}
