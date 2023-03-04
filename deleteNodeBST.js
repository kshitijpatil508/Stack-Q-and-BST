class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.val) {
        return undefined;
      }

      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  search(val) {
    if (this.root === null) {
      return null;
    }

    let current = this.root;

    while (current) {
      if (val === current.val) {
        return current;
      }

      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  delete(val) {
    this.root = deleteNode(this.root, val);
  }
}
function deleteNode(root, key) {
  if (root === null) {
    return null;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    let temp = minValueNode(root.right);
    root.val = temp.val;

    root.right = deleteNode(root.right, temp.val);
  }

  return root;
}

function minValueNode(node) {
  let current = node;

  while (current.left !== null) {
    current = current.left;
  }

  return current;
}

const tree = new BST();
function printInorder(node) {
  if (node === null) {
    return;
  }

  printInorder(node.left);
  console.log(node.val);
  printInorder(node.right);
}

tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);
console.log("Before Deleteion");
printInorder(tree.root);

tree.delete(50);

console.log("\nAfter Deleteion");
printInorder(tree.root);
