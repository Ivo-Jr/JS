/* 
  Crie um algoritmo que trasforme as notas do sistema numérico para sistema de 
  notas em caracteres tipo A B C

  * de 90 para cima - A
  * entre 80 - 89 - B
  * entre 70 - 79 - C
  * entre 60 - 69 - D
  * menor que 60 - F

*/

let score = 0

function checkValue(number) {
  ( number > 100 || number < 0) && console.log('Nota inválida');
  ( number >= 90 && number <= 100 ) && console.log('A');
  ( number >= 80 && number <= 89 ) && console.log('B');
  ( number >= 70 && number <= 79 ) && console.log('C');
  ( number >= 60 && number <= 69 ) && console.log('D');
  ( number >= 0 && number < 60 ) && console.log('F');
}

checkValue(score);

/* switch (number) {
  case number  90:
    console.log('A');
    break;
    
  default: 
  console.log('dale')
} */