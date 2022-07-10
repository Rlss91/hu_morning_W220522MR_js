function calcWithOutArgs() {
  let a = 5,
    b = 7;
  let c = "+";

  if (c === "+") {
    console.log(`${a} + ${b} = ${a + b}`);
  }
  if (c === "-") {
    console.log(`${a} - ${b} = ${a - b}`);
  }
  if (c === "*") {
    console.log(`${a} * ${b} = ${a * b}`);
  }
  if (c === "/") {
    console.log(`${a} / ${b} = ${a / b}`);
  }
}

function calcWithArgs(a, c, b) {
  if (c === "+") {
    console.log(`${a} + ${b} = ${a + b}`);
  }
  if (c === "-") {
    console.log(`${a} - ${b} = ${a - b}`);
  }
  if (c === "*") {
    console.log(`${a} * ${b} = ${a * b}`);
  }
  if (c === "/") {
    console.log(`${a} / ${b} = ${a / b}`);
  }
}

calcWithArgs(5, "-", 5);

function helloFunction(name) {
  console.log(`hello ${name}`);
}

helloFunction("shlomo");

function kamaRahokHaMisparMi0(num) {
  if (num < 0) {
    num *= -1; //num = num * -1
  }
  return num;
}

function hiburShel2MisparimVKamaRahokMi0(n1, n2) {
  let sum = n1 + n2;
  let tozaa = kamaRahokHaMisparMi0(sum);
  console.log("tozaa", tozaa);
}

hiburShel2MisparimVKamaRahokMi0(-5, -5);

//TK 1
function concat2Words(word1, word2) {
  let bigword = word1 + word2;
  return bigword;
}

function fnln(firstName, lastName) {
  let fullName = concat2Words(firstName, lastName);
  console.log("full name", fullName);
}

fnln("kenny", "mccormic");
//TK 2
function plus5(num) {
  return num + 5;
}

function displayPlus5(num) {
  let res = plus5(num);
  console.log("res", res);
}

displayPlus5(5);
//TK 3
function sub5(num) {
  return num + 5;
}

function displaySub5(num) {
  let res = sub5(num);
  console.log("res", res);
}

displaySub5(5);
