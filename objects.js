// class ShipLists {
//   constructor() {
//     this = [];
//   }
//   add(shipList) {
//     this.push(shipList);
//   }
// }

class ShipList {
  constructor(arrayFromFile) {
    this.title = arrayFromFile[0];
    this.d = arrayFromFile;
    this.d.shift();
    this.d.pop();
    this.rmEmpty();
    this.length = this.d.length;
    this.id = sls.length;
    // shipLists.add(this);
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
  push(ary) {
    this.d = this.d.push(ary);
  }
}
