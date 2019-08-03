var sls = [];
console.log("ive been called!!");
loadMe();

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
  loadList("https://hdblcr.github.io/fmk/lists/characters.txt");
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
  doThings();
}

function loadLists() {
  loadList("https://hdblcr.github.io/fmk/lists/SDSAllStars.txt");
  loadList("https://hdblcr.github.io/fmk/lists/MCU.txt");
  loadList("https://hdblcr.github.io/fmk/lists/characters.txt");
  loadList("https://hdblcr.github.io/fmk/lists/realLifeFriends.txt");
}

function doThings() {
  var total1 = 1,
  total2 = 1,
  total3 = 1,
  c1 = 0,
  c2 = 0,
  c3 = 0,
  p = "",
  toWrite = "",
  l1 = 0,
  l2 = 1,
  l3 = 2;

  l1 = document.getElementById("listSelect1").selectedIndex;
  l2 = document.getElementById("listSelect2").selectedIndex;
  l3 = document.getElementById("listSelect3").selectedIndex;

  list1 = sls[l1];
  list2 = sls[l2];
  list3 = sls[l3];

  total1 = list1.length;
  c1 = Math.floor(Math.random() * total1);
  total2 = list2.length;
  total3 = list3.length;
  do {
    c2 = Math.floor(Math.random() * total2);
  } while (list1.d[c1] == list2.d[c2]);

  do {
    do {
      c3 = Math.floor(Math.random() * total3);
    } while (list1.d[c2] == list2.d[c3]);
  } while (list1.d[c1] == list2.d[c3]);

  p = "<h3>";
  toWrite = p.concat('', list1.d[c1], ', ', list2.d[c2], ', and ', list3.d[c3], '!</h3>');

  document.getElementById("characters").innerHTML = toWrite;
}
