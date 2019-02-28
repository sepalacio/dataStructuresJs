/* const { addLeftNode,
  addRightNode,
  existsInLeftNode,
  existsInrightNode } = require('./utils') */

function BinarySearchTree (value) {
  this.value = value
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.insert = function (value) {
  if (value <= this.value) {
    addLeftNode(value, this)
  } else {
    addRightNode(value, this)
  }
}

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true
  if (value < this.value) {
    return existsInLeftNode(value, this)
  } else {
    return existsInrightNode(value, this)
  }
}

BinarySearchTree.prototype.printTree = function (order) {
  if (order === 'pre-order') logNode(this.value)
  if (this.left) this.left.printTree(order)
  if (order === 'in-order') logNode(this.value)
  if (this.right) this.right.printTree(order)
  if (order === 'pos-order') logNode(this.value)
}

BinarySearchTree.prototype.printByLevels = function () {
  var queue = [this]

  while (queue.length) {
    var treeNode = queue.shift()
    logNode(treeNode.value)
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }
}

BinarySearchTree.prototype.getMinValue = function () {
  return this.left ? this.left.getMinValue() : logNode(this.value)
}

BinarySearchTree.prototype.getMaxValue = function () {
  return this.right ? this.right.getMaxValue() : logNode(this.value)
}

function addLeftNode (value, bst) {
  bst.left ? bst.left.insert(value) : bst.left = new BinarySearchTree(value)
}

function addRightNode (value, bst) {
  bst.right ? bst.right.insert(value) : bst.right = new BinarySearchTree(value)
}

function existsInLeftNode (value, bst) {
  return bst.left ? bst.left.contains(value) : false
}

function existsInrightNode (value, bst) {
  return bst.right ? bst.right.contains(value) : false
}

function logNode (value) {
  console.log(`| ${value} |`)
}

module.exports = BinarySearchTree
