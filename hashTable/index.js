
let HashTable = require('./hashTable')

let myHashTable = new HashTable(30)

myHashTable.insert('Dean', 'dean@gmail.com')
myHashTable.insert('Megan', 'megan@gmail.com')
myHashTable.insert('Dane', 'dane@gmail.com')
myHashTable.insert('Marco', 'marco@gmail.com')
myHashTable.insert('Polo', 'polo@gmail.com')
myHashTable.insert('Foo', 'foo@gmail.com')
myHashTable.insert('Fos', 'foo1@gmail.com')
myHashTable.insert('Foa', 'foo2@gmail.com')
myHashTable.insert('Foi', 'foo3@gmail.com')
myHashTable.insert('Bar', 'bar@gmail.com')

myHashTable.update('Dean', 'deanMachine@gmail.com')
myHashTable.update('Megan', 'meganSmith@outlook.com')
myHashTable.update('Dane', 'dane2Bdev@gmail.com')

console.log('___________________________________')
console.log('myHashTable: ', myHashTable.buckets)
console.log('___________________________________')
console.log(myHashTable.get('Dean'))
console.log('___________________________________')
console.log(myHashTable.retrieveAll())
