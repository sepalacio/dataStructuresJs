let HashTable = require('./hashTable')

let myHashTable = new HashTable(30)

console.log('Hash: ', myHashTable.hash('Becca'))

myHashTable.insert('Dean', 'dean@gmail.com')
myHashTable.insert('Megan', 'megan@gmail.com')
myHashTable.insert('Dane', 'dane@gmail.com')

console.log('myHashTable: ', myHashTable.buckets)
