class HashMap {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(string) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode % this.size;
  }

  set(key, value) {
    this.table[this.hash(key)] = [key, value];
    this.sizeCheck();
  }

  get(key) {
    return this.table[this.hash(key)];
  }

  print() {
    console.log(this.table);
  }

  has(key) {
    return this.table[this.hash(key)] ? true : false;
  }
  remove(key) {
    if (this.hash(key)) {
      return false;
    }
    this.table[this.hash(key)] = undefined;
    return true;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        count++;
      }
    }
    return count;
  }

  clear() {
    this.table = new Array(this.size);
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        keys.push(this.table[i][0]);
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        values.push(this.table[i][1]);
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        entries.push(this.table[i]);
      }
    }
    return entries;
  }

  sizeCheck() {
    if (this.length() > (this.size * 3) / 4) {
      let newArray = new Array(this.size);
      this.table = [...this.table, ...newArray];
      this.size += this.size;
    }
  }
}

class HashSet {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  sizeCheck() {
    if (this.length() / this.size > 0.75) {
      let newArray = new Array(this.size);
      console.log("checked");
      this.table = [...this.table, ...newArray];
      this.size += this.size;
    }
  }

  hash(string) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode % this.size;
  }
  set(key) {
    this.table[this.hash(key)] = key;
    this.sizeCheck();
  }

  get(key) {
    return this.table[this.hash(key)];
  }
  has(key) {
    return this.table[this.hash[key]] ? true : false;
  }

  remove(key) {
    if (this.table[this.hash(key)]) {
      this.table[this.hash(key)] = undefined;
      return true;
    }
    return false;
  }
  length() {
    let count = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        count++;
      }
    }
    return count;
  }

  clear() {
    this.table = new Array(this.size);
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        keys.push(this.table[i]);
      }
    }
    return keys;
  }
}

