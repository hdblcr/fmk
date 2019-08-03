var sls = [];
console.log("ive been called!!");
fetchList();
// loadMe();

function txt2list(text) {
  ary = text.split("\n");
  sl = new ShipList(ary);
  sls.push(sl);
}

function loadList(file) {
  // var text = fetch("https://hdblcr.github.io/shipit/SDSAllStars.txt")
  //   .then( response => response.text());
  fetch(file)
    .then(function(response){
      // console.log("fetch response");
      return response.text();
    })
    .then(function(text) {
      // console.log("text");
      txt2list(text);
    });
}

function fetchList() {
  console.log("tesitnnnnnnnnnnnn");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      fetchCharacters();
    }
  };
  xhttp.open("GET", "https://hdblcr.github.io/fmk/", true);
  xhttp.send();
}

function fetchCharacters() {
  console.log("got to fetchCharacters");
  loadList("https://hdblcr.github.io/fmk/lists/characters.txt");
  var doc = document.getElementById("list");
  console.log(sls.d);
  console.log(sls);
  for (sl in sls.d) {
    console.log(sl);
    var item = document.createElement("li");
    var textnode = document.createTextNode(sl);
    item.appendChild(textnode);
    doc.appendChild(item);
  }
}

function fetchOptions() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      addOptions();
    }
  };
  xhttp.open("GET", "https://hdblcr.github.io/fmk/lists", true);
  xhttp.send();
}

function addOptions() {
  var sl, opt1, opt2;
  var doc = document.getElementById("selections");
  var sel1 = document.createElement("select");
  var sel2 = document.createElement("select");

  sel1.id = "listSelect1";
  sel2.id = "listSelect2";

  for (sl in sls) {
    opt1 = document.createElement("option");
    opt2 = document.createElement("option");
    opt1.text = sls[sl].title;
    sel1.add(opt1, sls[sl].id);
    opt2.text = sls[sl].title;
    sel2.add(opt2, sls[sl].id);
  }
  doc.appendChild(sel1);
  doc.appendChild(sel2);
}

function loadMe() {
  loadLists();
  // fetchOptions();
  doThings();
}

function loadLists() {
  // loadList("https://hdblcr.github.io/fmk/lists/SDSAllStars.txt");
  // loadList("https://hdblcr.github.io/fmk/lists/MCU.txt");
  loadList("https://hdblcr.github.io/fmk/lists/characters.txt");
  // loadList("https://hdblcr.github.io/fmk/lists/realLifeFriends.txt");
}

function doThings() {
  var total = 1,
  c1 = 0,
  c2 = 0,
  c3 = 0,
  p = "<h3>",
  toWrite = "";

  var charList = sls[0];

  total = charList.length;
  c1 = Math.floor(Math.random() * total);
  do {
    c2 = Math.floor(Math.random() * total);
  } while (c1 == c2);

  do {
    do {
      c3 = Math.floor(Math.random() * total);
    } while (c2 == c3);
  } while (c1 == c3);

  toWrite = p.concat('', charList.d[c1], ', ', charList.d[c2], ', and ', charList.d[c3], '!</h3>');

  document.getElementById("characters").innerHTML = toWrite;
}


function addChar() {
  var name = document.forms["myForm"]["character"].value;
  var list = sls[0];
  list.add(name);
  writeToFile();
}
