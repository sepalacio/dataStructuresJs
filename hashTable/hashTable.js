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
  if (!this.buckets[index]) {
    addNewBucket(key, value, index, this)
  } else {
    addNodeToBucket(key, value, index, this)
  }
}

HashTable.prototype.update = function (key, value) {
  let index = this.hash(key)
  if (!this.buckets[index]) {
    return false
  } else if (this.buckets[index].key === key) {
    updateBucket(this.buckets[index], value)
  } else {
    findNodeInAbucket(index, this, key, value)
  }
}

function addNewBucket (key, value, index, HashTable) {
  HashTable.buckets[index] = new HashNode(key, value)
}

function updateBucket (bucket, newValue) {
  bucket.value = newValue
}

function addNodeToBucket (key, value, index, HashTable) {
  let currentNode = HashTable.buckets[index]
  while (currentNode.next) {
    currentNode = currentNode.next
  }
  currentNode.next = new HashNode(key, value)
}

function findNodeInAbucket (index, HashTable, key, value) {
  let currentNode = HashTable.buckets[index]
  while (currentNode.next) {
    if (currentNode.next.key === key) {
      updateBucket(currentNode.next, value)
      return
    }
    currentNode = currentNode.next
  }
}

module.exports = HashTable
