### OBJECT:
  * Objeto;
  * Propriedade / Atributos
  * Funcionalidades / Métodos

  {propriedade: "valor"}

  const person = {
    name: "Ivo Junior",
    age: 25,
    walk: function() {
      console.log('walk')
    }
  }

  console.log(`O ${person.name} tem ${person.age} de idade`)


----

### ARRAY:

const animals = [
  'Lion',
  'Giraffe',
  'Dolphin',
  'Dog'
]

console.log(animal[2])
// Dolphin

const animals = [
  'Lion',
  'Giraffe',
  {
    name: 'Dolphin',
    type: 'aquatic'
  },
  'Dog'
]

console.log(`The ${animals[2].name} is ${animals[2].type}`)
// The dolphin is aquatic

----

### METHOD:

let number = 354.313423523;
console.log(number.toFixed(number).replace(".", ","))