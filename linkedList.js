function LinkedList () {
  this.head = null
  this.tail = null
}

function Node (value, next, prev) {
  this.value = value
  this.next = next
  this.prev = prev
}

LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null)
  if (this.head) { this.head.prev = newNode }
  else { this.tail = newNode }
  this.head = newNode
}

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail)
  if (this.tail) { this.tail.next = newNode }
  else { this.head = newNode }
  this.tail = newNode
}

var myLinkedList = new LinkedList()

myLinkedList.addToHead(100)
myLinkedList.addToHead(200)
myLinkedList.addToHead(300)
myLinkedList.addToTail(1)

console.log(myLinkedList)
