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
  return (array[lastitem]+ ', ' + array[0]);
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
  for (let index = 0; index < array.length; index += 1){

    if (array[index] > maior){
      maior = array[index];
    }
  }   
  for (let index = 0; index < array.length; index += 1){
    if (array[index] === maior){
      count += 1;
    }
  }
return count
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
