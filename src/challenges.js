// Desafio 1
function compareTrue() {
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(" ");
  return result;
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
function highestCount(entrada) {
  let maior = -Infinity;
  let count = 0;
  for (let index = 0; index < entrada.length; index += 1) {

    if (entrada[index] > maior) {
      maior = entrada[index];
    }
  }
  for (let index = 0; index < entrada.length; index += 1) {
    if (entrada[index] === maior) {
      count += 1;
    }
  }
  return count
}

console.log(highestCount([-2,-2,-1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = mouse - cat1;
  let distcat2 = mouse - cat2;
  if (distcat1 < distcat2) {
    return 'cat1';
  }
  else if (distcat2 < distcat1) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(10, 16, 22));

// Desafio 8
function fizzBuzz(array) {
  const result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 != 0) {
      result[index] = 'fizz';
    }
    else if (array[index] % 5 === 0 && array[index] % 3 != 0) {
      result[index] = 'buzz';
    }
    else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result[index] = 'fizzBuzz';
    }
    else {
      result[index] = 'bug!';
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let array = [];
  array = string.split("");
  for (index = 0; index < array.length; index += 1) {
    if (array[index] === 'a') {
      array[index] = 1;
    }
    else if (array[index] === 'e') {
      array[index] = 2;
    }
    else if (array[index] === 'i') {
      array[index] = 3;
    }
    else if (array[index] === 'o') {
      array[index] = 4;
    }
    else if (array[index] === 'u') {
      array[index] = 5;
    }
  }
  result = array.toString();
  result2 = result.replace(/,/g, '');
  return result2;
}

function decode(string) {
  let word = [];
  word = string.split("");
  for (index = 0; index < word.length; index += 1) {
    if (word[index] === '1') {
      word[index] = 'a';
    }
    else if (word[index] === '2') {
      word[index] = 'e';
    }
    else if (word[index] === '3') {
      word[index] = 'i';
    }
    else if (word[index] === '4') {
      word[index] = 'o';
    }
    else if (word[index] === '5') {
      word[index] = 'u';
    }
  }
  result = word.toString();
  result2 = result.replace(/,/g, '');
  return result2;
}


// Desafio 10
function techList(tec, nome) {
  const array = new Array(tec.length).fill({ name: nome, tech: "provisory",})
  for (let index = 0; index < array.length; index += 1) {
    array[index].tech = tec[index];
  }
  return array;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
