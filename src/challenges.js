// Desafio 1
function compareTrue() {
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
}

// Desafio 4
function concatName(array) {
  let lastitem = array.length - 1;
  return (array[lastitem] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {

    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      count += 1;
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = mouse - cat1;
  let distcat2 = mouse - cat2;
  if (distcat1 < distcat2) {
    return 'cat1';
  }
  else if (distcat2 < distcat1){
    return 'cat2';
  }
  else{
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(10, 16, 22));

// Desafio 8
function fizzBuzz(array) {
  const result=[];
  for (let index = 0; index < array.length; index += 1){
    if (array[index]%3 === 0 && array[index]%5 != 0){
      result[index] = 'fizz';
    }
    else if (array[index]%5 === 0 && array[index]%3 != 0){
      result[index] = 'buzz';
    }
    else if (array[index]%3 === 0 && array[index]%5 === 0){
      result[index] = 'fizzBuzz';
    }
    else{
      result[index] = 'bug!';
    }
  }
    return result;
  }

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
