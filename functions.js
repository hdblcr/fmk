var sls = [];
console.log("ive been called!!");
loadMe();

// convert from file to array of characters
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
      console.log("fetch response");
      txt2list(response.text());
    })
    // .then(function(text) {
    //   // console.log("text");
    //   txt2list(text);
    // });
}

function fetchList() {
  var xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      fetchCharacters();
    }
  };
  xhttp.open("GET", "https://hdblcr.github.io/fmk/", true);
  xhttp.send();
}

function fetchCharacters() {
  loadLists();
  var doc = document.getElementById("list");
  for (sl in sls) {
    var item = document.createElement("li");
    item.text = sls[sl].title;
    doc.appendChild(item);
  }
}

function fetchOptions() {
  var xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      addOptions();
    }
  };
  xhttp.open("GET", "https://hdblcr.github.io/fmk/", true);
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
  chooseCharacters();
}

function loadLists() {
  // loadList("https://hdblcr.github.io/fmk/lists/SDSAllStars.txt");
  // loadList("https://hdblcr.github.io/fmk/lists/MCU.txt");
  loadList("https://hdblcr.github.io/fmk/lists/characters.txt");
  // loadList("https://hdblcr.github.io/fmk/lists/realLifeFriends.txt");
}

function chooseCharacters() {
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

  toWrite = p.concat('', charList[c1], ', ', charList[c2], ', and ', charList[c3], '!</h3>');

  document.getElementById("characters").innerHTML = toWrite;
}
