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

function fetchOptions() {
  var xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      addOptions();
    }
  };
  xhttp.open("GET", "https://hdblcr.github.io/shipit/", true);
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
  fetchOptions();
}

function loadLists() {
  loadList("https://hdblcr.github.io/shipit/lists/SDSAllStars.txt");
  loadList("https://hdblcr.github.io/shipit/lists/MCU.txt");
  loadList("https://hdblcr.github.io/shipit/lists/characters.txt");
  loadList("https://hdblcr.github.io/shipit/lists/realLifeFriends.txt");
}

function doThings() {
  var total1 = 1,
  total2 = 1,
  c1 = 0,
  c2 = 0,
  p = "",
  toWrite = "",
  l1 = 0,
  l2 = 1;

  l1 = document.getElementById("listSelect1").selectedIndex;
  l2 = document.getElementById("listSelect2").selectedIndex;

  list1 = sls[l1];
  list2 = sls[l2];
  console.log(list1.title);
  console.log(list2.title);

  total1 = list1.length;
  c1 = Math.floor(Math.random() * total1);
  total2 = list2.length;
  do {
    c2 = Math.floor(Math.random() * total2);
  } while (list1.d[c1] == list2.d[c2]);

  p = "<p><b>";
  toWrite = p.concat('', list1.d[c1], '</b> and <b>', list2.d[c2], '</b>!</p>');

  document.getElementById("characters").innerHTML = toWrite;
}
