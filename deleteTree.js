class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  print() {
    if (!this.root) {
      console.log("Empty tree");
      return;
    }

    const queue = [this.root];
    let str = "";

    while (queue.length) {
      const node = queue.shift();
      str += `${node.value} `;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    console.log(str);
  }

  deleteTree() {
    if (!this.root) {
      return;
    }

    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      node.left = null;
      node.right = null;
    }

    this.root = null;
  }
}
const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(8);

bst.print(); // output: 5 3 7 1 4 6 8

bst.deleteTree();
bst.print(); // output: Empty tree
