// ============================== consts ====================================

var sls = new Array();
console.log("ive been called!!");


// ============================== ShipList class =====================================

class ShipList {
  constructor(arrayFromFile) {
    this.title = arrayFromFile[0];
    this.d = arrayFromFile;
    this.d.shift();
    this.d.pop();
    this.rmEmpty();
    this.length = this.d.length;
    this.ary = this.d;
    // this.id = sls.length;
    // sdddhipLists.add(this);
  }
  rmEmpty() {
    var i = 0;
    for(i=0; i < this.length; i++) {
      if (this.d[i].length == 0) {
        this.d.splice(i, i+1);
      }
    }
  }
  add(name) {
    this.d.push(name);
  }
  adds(names) {
    var i = 0;
    for (i=0; i<names.length; i++) {
      this.add(names[i]);
    }
  }
}


// ================================ functions =====================================


// ================================ Shipples class ================================

class Shipples {
  constructor (){
    this.d = [];
    this.size = this.d.length;
    this.numLists = this.length;
  }

  add (sl) {
    this.d.push(sl);
  }

  list(num) {
    return this.d[num].ary;
  }

  loadLists() {
    console.log("load lists");
    this.loadList("./lists/characters.txt");
  }

  loadList(file) {
    console.log("load list");
    var data = this.fetch(file);
  }

  fetch(file) {
    console.log("fetch");
    const fs = require('fs');
    try {
      const data = fs.readFileSync(file);
      this.txt2list(data.toString());
    } catch (err) {
      console.error(err);
    }
  }

  // convert from file to array of characters
  txt2list(text) {
    console.log("txt2list");
    var ary = text.split("\n");
    var sl = new ShipList(ary);
    this.add(sl);
    console.log(this);
  }
}

function loadMe() {
  console.log("load me!");
  sls = new Shipples;
  sls.loadLists();
  // fetchOptions();
  chooseCharacters(sls);
}

function chooseCharacters(sls) {
  console.log("choose characters");
  var total = 1,
  c1 = 0,
  c2 = 0,
  c3 = 0,
  p = "<h3>",
  toWrite = "";

  console.log("about to write charList");
  console.log("sls[0]: ");
  console.log(sls.list(0));
  var charList = [];
  var i = 0;
  do {
    charList = charList.concat(sls.list(i));
    i++;
  } while (i < sls.numLists);
  console.log(charList);

  total = charList.length;
  console.log(total);
  console.log("hunch: ", charList.length);
  c1 = Math.floor(Math.random() * total);
  do {
    c2 = Math.floor(Math.random() * total);
  } while (c1 == c2);

  do {
    do {
      c3 = Math.floor(Math.random() * total);
    } while (c2 == c3);
  } while (c1 == c3);

  var toWrite = p.concat('', charList[c1], ', ', charList[c2], ', and ', charList[c3], '!</h3>');

  document.getElementById("characters").innerHTML = toWrite;
}


















function fetchList(file) {
  console.log("fetch list");
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
  console.log("fetch characters");
  // loadLists();
  var doc = document.getElementById("list");
  console.log("sls");
  console.log(sls);
  for (sl in sls) {
    console.log(sl);
    var item = document.createElement("li");
    item.text = sls[sl].title; // should probably be sl.title
    doc.appendChild(item);
  }
}

function fetchOptions() {
  console.log("fetch options");
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
  console.log("I shouldn't be called");
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



function addChar() {
  var name = document.forms["myForm"]["character"].value;
  sls.add(name);
  // writeToFile();
}

// call main function
loadMe();
