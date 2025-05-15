'use strict'

// 2
let person = {
  name: 'Alex',
  age: 22,
  city: 'Kishnev',
}
console.log(person)

person.isStudent = true
console.log(person)

delete person.city
console.log(person)

// 3
person.contacts = {
  email: 'esixterb58@gmail.com',
  phone: '+37377891320',
}
console.log(person)

person.contacts.email = 'bammeufroumupe-6308@yopmail.com'
person.contacts.phone = '9(445)737-98-89'

// 4
const newPerson = person
console.log(newPerson)

const newPerson1 = Object.assign({}, person)
console.log(newPerson1)

const newPerson2 = {...person}
console.log(newPerson2)

newPerson2.age = 18// изменит age в newPerson2 так как ссылается именно в ячейку памяти с newPerson2
newPerson2.contacts.email = 'dubredupadda-8070@yopmail.com'// изменяет email во всех копиях так как значение email хранится в другом объекте который не меняется в ячейке памяти и любые изменения свойств ключей объекта contacts будет перезаписанны а не скопиравонны в новый скопированный объект и ячейку памяти

// 5
const user = {
  name: 'Ivan',
  age: 30,
  phone: false,
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

// 6
const newUser = Object.assign({}, user)
console.log(newUser)

// 7
const userNew = {
  name: 'Alex',
  address: {
    city: 'Moscou',
    zip: '101000',
  },
}
console.log(userNew)
const copy = {...userNew}
copy.address.city = 'Kazan'
// потому что spread-оператор делает поверхностную копию объекта
// во избежании этого нужно применять глубокую копию

// 8
const animal = {
  speak() {
    console.log(777)
  }
}
const dog = Object.create(animal)
dog.speak()

// 9
Object.freeze(user)
// user.name = 'Vlad'выдаёт ошибку потому что мы использовали freeze тем самым свойства объекта стали только для чтения
// но если в объекте есть другой объект его згачения можно изменить так как freeze выполняет поверхностную заморозку

// 10
const person3 = {}
Object.defineProperty(person3, '_name', {
  value: 'Anna',
  writable: false,
})

console.log(person3)
// EXAMINATION
for (const el in person3) {
  console.log(person3[el])
}
// person3._name = 'Olga' будет ошибка так как использовали writable: false при таком условии значение изменить нельзя
// delete(person3._name) та же история что в прошлом действии Cannot delete property '_name' of #<Object>