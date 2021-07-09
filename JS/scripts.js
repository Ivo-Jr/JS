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
console.log(techs.slice(1,3))
  // ["css", "js"]

// remover 1 ou mais itens em qualquer posição do array
/* console.log(techs.splice(1,2)) */
  // [ 'css', 'js' ]

// encontrar a posição de um elemento no array
