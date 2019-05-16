var sls = [];
// console.log("ive been called!!");
loadMe();

function txt2list(text) {
  ary = text.split("\n");
  sl = new ShipList(ary);
  sls.push(sl);
  // console.log(ary);
  // return ary;
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

function loadMe() {
  // console.log("loaded??");
  // load lists
  loadList("https://hdblcr.github.io/shipit/lists/SDSAllStars.txt");
  loadList("https://hdblcr.github.io/shipit/lists/MCU.txt");
  loadList("https://hdblcr.github.io/shipit/lists/characters.txt");
  loadList("https://hdblcr.github.io/shipit/lists/realLifeFriends.txt");
}

function doThings(l1, l2) {
  // loadMe();
  var total1 = 1,
  total2 = 1,
  c1 = 0,
  c2 = 0,
  p = "",
  toWrite = "";

  list1 = sls[l1];
  list2 = sls[l2];

  total1 = list1.length;
  c1 = Math.floor(Math.random() * total1);
  total2 = list2.length;
  // c2 = Math.floor(Math.random() * total2);
  do {
    c2 = Math.floor(Math.random() * total2);
  } while (list1.d[c1] == list2.d[c2]);
  // console.log(c1);
  // console.log(c2);
  // console.log(list1.d[c1]);
  // console.log(list2.d[c2]);

  p = "<p><b>";
  toWrite = p.concat('', list1.d[c1], '</b> and <b>', list2.d[c2], '</b>!</p>');

  document.getElementById("characters").innerHTML = toWrite;
}
