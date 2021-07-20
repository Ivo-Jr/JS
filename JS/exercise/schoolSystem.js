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



// USING SWITCH CASE:

/* function compair(value) {
  let scoreA;
  let scoreB;
  let scoreC;
  let scoreD;
  let scoreF;

  // if (value >= 90 && value <= 100) {
  //   scoreA = value;
  // } else if (value >= 80 && value <= 89) {
  //   scoreB = value;
  // } else if (value >= 70 && value <= 79) {
  //   scoreC = value;
  // } else if (value >= 60 && value <= 69) {
  //   scoreD = value;
  // } else if (value < 60 && value >= 0) {
  //   scoreF = value;
  // }

  (value >= 90 && value <= 100) ? scoreA = value : null;
  (value >= 80 && value <= 89) ? scoreB = value : null;
  (value >= 70 && value <= 79) ? scoreC = value : null;
  (value >= 60 && value <= 69) ? scoreD = value : null;
  (value < 60 && value >= 0) ? scoreF = value : null;
  
  switch (value) {
    case scoreA:
      console.log('A');
      break;

    case scoreB:
      console.log('B');
      break;

    case scoreC:
      console.log('C');
      break;

    case scoreD:
      console.log('D');
      break;

    case scoreF:
      console.log('F');
      break;
      
    default: 
    console.log('Nota inválida')
  }
}

compair(70) */