class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  getTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  pop() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  getHead() {
    return this.head;
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  contains(value) {
    if (this.head.value === value) {
      return true;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
      if (current.value === value) {
        return true;
      }
    }

    return false;
  }

  find(value) {
    if (this.head.value === value) {
      return 0;
    }
    let current = this.head;
    let index = 0;
    while (current.next) {
      index++;
      current = current.next;
      if (current.value === value) {
        return index;
      }
    }

    return null;
  }

  toString() {
    let string = `${this.head.value}`;
    let current = this.head;
    while (current.next) {
      current = current.next;
      string += " " + current.value;
    }
    return string;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return null;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAt(value, index) {
    let newNode = new Node(value);
    let current = this.head;
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;

    this.size++;
  }

  removeAt(index) {
    let current = this.head;
    if (index === 0) {
      this.head = null;
      this.size--;
      return;
    }
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    this.size--;
  }
}

export default {
    Node,
    LinkedList
}
