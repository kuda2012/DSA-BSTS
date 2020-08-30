class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val && !currentNode.left) {
        currentNode.left = new Node(val);
        currentNode = currentNode.left;
      } else if (val < currentNode.val && currentNode.left) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val && !currentNode.right) {
        currentNode.right = new Node(val);
        currentNode = currentNode.right;
      } else if (val > currentNode.val && currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.right;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let currentNode = this.root;
    insertNode(currentNode);
    function insertNode(activeNode) {
      if (activeNode) {
        if (val < activeNode.val && !activeNode.left) {
          activeNode.left = new Node(val);
          insertNode(activeNode.left);
        } else if (val < activeNode.val && activeNode.left) {
          insertNode(activeNode.left);
        } else if (val > activeNode.val && !activeNode.right) {
          activeNode.right = new Node(val);
          insertNode(activeNode.right);
        } else if (val > activeNode.val && activeNode.right) {
          insertNode(activeNode.right);
        } else {
          activeNode = activeNode.right;
        }
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return "No root value";
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val == val) return currentNode;
      else if (val < currentNode.val && currentNode.left) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val && currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.right;
      }
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) {
      return "No root value";
    }
    let currentNode = this.root;

    let foundVal = findNode(currentNode);
    function findNode(activeNode) {
      if (activeNode) {
        if (activeNode.val == val) return activeNode;
        else if (val < activeNode.val && activeNode.left) {
          return findNode(activeNode.left);
        } else if (val > activeNode.val && activeNode.right) {
          return findNode(activeNode.right);
        } else {
          activeNode = activeNode.right;
        }
      }
    }
    return foundVal;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let preOrderArray = [];
    traverse(this.root);
    function traverse(node) {
      preOrderArray.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    return preOrderArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let preOrderArray = [];
    traverse(this.root);
    function traverse(node) {
      if (node.left) traverse(node.left);
      preOrderArray.push(node.val);
      if (node.right) traverse(node.right);
    }
    return preOrderArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let preOrderArray = [];
    traverse(this.root);
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      preOrderArray.push(node.val);
    }
    return preOrderArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }
  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
