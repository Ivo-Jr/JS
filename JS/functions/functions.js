// Callback function

/* 
  * Callback -> chamar de volta.
  * Basicamente a callback chama uma função de volta dentro dele mesmo.
*/

function sayMyName(name) {
  // console.log('antes de executar a funcao callback')

  name()

  // console.log('depois de executar a callback')
}

sayMyName(
  () => {
    // console.log('estou em uma callback')
  }
)


/* 
  # Function() constructor

  * expressão new
  * criar um novo objeto 
  * this keyword

*/

function Person(name) {
  this.name = name
  this.walk = function() {
   return `${this.name} está COM FOME!`
  }
}

const junior = new Person('junior');
const gabriel = new Person('Gabriel');

console.log(junior.walk())
// console.log(gabriel.walk())

