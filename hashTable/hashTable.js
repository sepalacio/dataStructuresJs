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
  let total = key.split('')
                 .map(getCharCodes)
                 .reduce(sum, 0)

  let bucket = total % this.numBuckets                 
  return bucket
} 

module.exports = HashTable