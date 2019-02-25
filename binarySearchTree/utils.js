'use stric'

const BST = require('./binarySearchTree')

// bst = BinarySearchTree instance
function addLeftNode (value, bst) {
  bst.left ? bst.left.insert(value) : bst.left = new BST(value)
}

function addRightNode (value, bst) {
  bst.rigth ? bst.rigth.insert(value) : bst.rigth = new BST(value)
}

function existsInLeftNode (value, bst) {
  return bst.left ? bst.left.contains(value) : false
}

function existsInRigthNode (value, bst) {
  return bst.rigth ? bst.rigth.contains(value) : false
}

module.exports = {
  addLeftNode,
  addRightNode,
  existsInLeftNode,
  existsInRigthNode
}
