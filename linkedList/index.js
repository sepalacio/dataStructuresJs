
const LinkedList = require('./linkedList')

var myLinkedList = new LinkedList()

myLinkedList.addToHead('one')
myLinkedList.addToHead(100)
myLinkedList.addToHead('10')
myLinkedList.addToHead(100)
myLinkedList.addToHead('two')
myLinkedList.addToHead(30)
myLinkedList.addToTail(100)

console.log(myLinkedList)
