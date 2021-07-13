// #Manipulando Arrays:

let number = 354.313423523;
/* console.log(number.toFixed(2).replace(".", ",")) */
// 354,31


let word = 'Programar é muito bacana!'
/* console.log(word.toLowerCase()); */
// programar é muito bacana!

/* console.log(word.toUpperCase()); */
// PROGRAMAR É MUITO BACANA!

let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_")
/* console.log(phraseWithUnderscore.toLowerCase()) */

/* console.log(phrase.includes("Amor")); */
/* true */
// includes() é Case sensitive.

const arr = [
  "a", 
  {type: "array"}, 
  function() {return "alo"}
];
/* console.log(arr[2]()) */
// "alo"

/* console.log(arr[1].type) */
// "array"

/* console.log(arr.length) */
// 3

let palavra = "manipulação"
/* console.log(Array.from(palavra)) */
// ['m', 'a', 'n', 'i','p', 'u', 'l', 'a','ç', 'ã', 'o']

let techs = ["html", "css", "js"];

// adicionar um item no fim
/* techs.push("node.js"); */

// adicionar no começo
/* techs.unshift("sql"); */

// remover do fim
/* techs.pop()*/

//remover so começo
/* techs.shift() */

// pegar somente alguns elementos do array
/* console.log(techs.slice(1,3)) */
  // ["css", "js"]

// remover 1 ou mais itens em qualquer posição do array
/* console.log(techs.splice(1,2)) */
  // [ 'css', 'js' ]

// encontrar a posição de um elemento no array
/* let index = techs.indexOf('css'); */
/* console.log(index) */
// 1






// Maninpulando objetos: 
// adicionando novo objeto!

/* const obj = { 
  name: 'Ivo Junior',
  age: 25,
  height: 1.8
}

const obj2 = { ...obj, sex: 'male'} */

/* console.log(obj2) */

/* const person = { 
  name: 'Junior',
  age: 25
}

delete person.age

console.log(person) */
  // { name: 'Junior' }



// OPERADORES LÓGICOS:

// EXPONENCIAÇÃO

/* console.log( 3 ** 2) */
  // 9

// Assignment
/* let x
x = 3 */

/* console.log( x ** 2) */
 // 9


 // CONDICIONAL TERNÁRIA:

 /* let pao = true;
 let queijo = true;

 const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'; */

 /* console.log(niceBreakfast); */
  // Café top


// PRECEDÊNCIA DOS OPERADORES:

/* console.log( 3 > 2 > 1) */
  // false
  /*  Aqui comparamos primeiro: "3 > 2"? True. 
    segundo: "true > 1"? false.
  */
 
    // Para resultar em true, uma das formas de escrevermos além d usarmos "grouping" - (parenteses), é a seguinte:
 /* console.log( 3 > 2 == 1) */
  // true. 

 /* console.log( 3 > 2 && 2 > 1) */
  // true. 


  // SWITCH CASE (calculadora)

 /*  function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
      case '+':
        result = number1 + number2;
        break
      case '-':
        result = number1 - number2;
        break
      case '*':
        result = number1 * number2;
        break
      case '/':
        result = number1 / number2;
        break
        default:
      console.log('não implementado')
      break
    }

    return result
  }

  console.log(calculate(2,'*', 9)) */

// THROW E TRY/CATCH:

/* function sayMyName(name = '') {
  if (name === '') {

    // "throw" lança uma execução definida pelo usuário. A função interrompe e o 
    // controle passa para o primeiro bloco do "catch".
    throw 'Nome é obrigatorio'
  }

  console.log(name)

}

try {
  sayMyName()
} catch (e) {
  console.log(e)
} */
