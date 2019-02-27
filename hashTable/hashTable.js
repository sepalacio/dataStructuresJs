'use strict'

function HashTable (size) {
  this.buckets = Array(size)
  this.numBuckets = this.buckets.length
}

function HashNode (key, value, next = null) {
  this.key = key
  this.value = value
  this.next = next
}

HashTable.prototype.hash = function (key) {
  let getCharCodes = char => char.charCodeAt(char)
  let sum = (acum, charCoded) => acum + charCoded
  let total = key.split('').map(getCharCodes).reduce(sum, 0)
  return total % this.numBuckets // Bucket
} 

HashTable.prototype.insert = function (key, value) {
  let index = this.hash(key)
  console.log('Index: ', index)
  if (!this.buckets[index]) {
    addNewBucket(key, value, index, this)
  }  else {
    addNodeToBucket(key, value, index, this)
  }
}

function addNewBucket (key, value, index, HashTable) {
  HashTable.buckets[index] = new HashNode(key, value)
}

function addNodeToBucket (key, value, index, HashTable) {
  let currentNode = HashTable.buckets[index]
  while (currentNode.next) {
    currentNode = currentNode.next
  }
  currentNode.next = new HashNode(key, value)
}

module.exports = HashTable