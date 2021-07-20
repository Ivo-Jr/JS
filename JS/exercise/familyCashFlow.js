/* 
  Crie um onjeto que possuirá 2 propriedades, ambas de tipo array:

  * receitas: []
  * despesas: []

  Agora, crie uma função que irá calcular o total de receitas e despesas e irá 
  mostrar uam mensagem se a família está com saldo positivo ou negativo, 
  seguindo do valor do saldo.

*/

let family = {
  recipes: [ 1000.86, 500, 12000, 18000 ],
  expenses: [ 1000, 500, 200, 560.77, 30, 800, 120, 900.90, 3000, 3200, 4000 ]
}

// FORMA 1:

/* let sumRecipes;
let sumExpenses;

function sumValues(number) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  sumRecipes = number.recipes.reduce(reducer);
  sumExpenses = number.expenses.reduce(reducer);
}

function calcValues() {
  let total = sumRecipes - sumExpenses;

 ((sumRecipes - sumExpenses) < 0 ) 
  ? console.log(`A família está com um saldo negativo de: R$${total.toFixed(2)}`)
  : console.log(`A família está com um saldo positivo de: R$${total.toFixed(2)}`)
  
}

sumValues(family);
calcValues(); */


// FORMA 2:

function sum(array) {
  let sum = 0;

  for(let value of array) {
    sum += value
  }

  return sum
}

function calculateBalance() {
  const calculateIcomes = sum(family.recipes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIcomes - calculateExpenses;

  let itsOk = total >= 0;

  let balanceTex = 'negativo';

  if (itsOk) {
    balanceTex = 'positivo'
  }

  console.log(`A família está com um saldo ${balanceTex} de: R$${total.toFixed(2)}`)
}


calculateBalance();