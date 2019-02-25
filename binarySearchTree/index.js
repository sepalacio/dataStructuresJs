'use strict'

const BST = require('./binarySearchTree')

var myBst = new BST(50)

myBst.insert(30)
myBst.insert(70)
myBst.insert(100)
myBst.insert(60)
myBst.insert(59)
myBst.insert(20)
myBst.insert(45)
myBst.insert(35)
myBst.insert(85)
myBst.insert(105)
myBst.insert(10)

console.log('_______in-order_______')
myBst.printTree('in-order')

console.log('_______pre-order_______')
myBst.printTree('pre-order')

console.log('_______pos-order_______')
myBst.printTree('pos-order')

console.log('______ Print by tree leves _____')
myBst.printByLevels()

console.log('______ Get min value in tree _____')
myBst.getMinValue()

console.log('______ Get max value in tree _____')
myBst.getMaxValue()
