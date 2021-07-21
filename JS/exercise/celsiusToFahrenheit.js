/* 
  Crie uma função que receba uma string em celsius ou fahrenheit e faça a 
  transformação de uma unidade para outra
*/

// FORMA 1:

/* let temp = "30c"

function identifyValue(value){

  let number = parseInt(value)

  if(value.toUpperCase().includes("C")) {
    calcTemp(number, 'C')
  }
  
  if(value.toUpperCase().includes("F")) {
    calcTemp(number, 'F')    
  }

}

function calcTemp(value, scale) {
  let F;
  let C;

  if (scale === 'C') {
    F = value * 9/5 + 32;
    console.log(`${F}F`);
  }

  if (scale === 'F') {
    C = (value-32) * 5/9
    console.log(`${C}C`);
  }
  
}

identifyValue(temp); */


// FORMA 2:

function transformDegree(degree) {
  const celciusExists = degree.toUpperCase().includes('C');
  const fahrenheitExists = degree.toUpperCase().includes('F');

  // fluxo de erro
  if(!celciusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado');
  }

  // fluxo ideal, F -> C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
  let degreeSign = 'C';

  // fluxo alternativo C -> F
  if(celciusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    let formula = (celsius) => celsius * 5/9 + 32;
    let degreeSign = 'F';
  }

  return formula(updatedDegree) + degreeSign;

}

try {
  console.log(transformDegree('10c'));
  console.log(transformDegree('50f'));
  transformDegree('50z')
} catch (error) {
  console.log(error.message)
}

if (process.env.NODE_ENV === 'development') {
  console.log('bora')
}