// 1. Declare uma variável de nome weight:
let weight;

// 2. Que tipo de dado é a variável acima?
  // console.log(typeof weight);
  // undefined

/* 
  3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String;
    * age: Number (integer);
    * stars: Number (float);
    * isSubscribed: Boolean
*/

const name = 'Ivo Junior';
const age = 25;
const stars = 2.5;
const isSubscribed = true;

/*
  4. A variavel student abaixo é de que tipo de dados?

  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

  4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada peopriedade deo objeto.
*/

// let student = {};

// 4.1
  // console.log(student)
  // Object

// 4.2
  student = {
    name: 'Ivo Junior',
    age: 25,
    weight: 74,
    isSubscribed: true
  }
  // console.log(`${student.name} tem ${student.age} anos de idade e pesa ${student.weight} kilos`) 

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
  let students = [];
  // console.log(student)

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array).

students = [
  student
]

console.log(students)