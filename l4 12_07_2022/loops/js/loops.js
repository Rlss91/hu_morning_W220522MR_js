//i++ => i = i + 1
for (let i = 0; i < 100; i++) {
  console.log("*");
}

//TK 1 1
for (let i = 0; i < 152; i++) {
  console.log("hello for loop");
}

//TK 1 2
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

let gradesArr = [95, 95, 95, 95, 95];
for (let i = 0; i < gradesArr.length; i++) {
  gradesArr[i] += 5; // gradesArr[0] = gradesArr[0] + 5 // gradesArr0 = gradesArr0 + 5
}

/*
    i = 0
    gradesArr[0] += 5;
    i (0) < gradesArr.length (5)
    i++
    i = 1
    gradesArr[1] += 5;
    i (1) < gradesArr.length (5)
    i++
    i = 2
    gradesArr[2] += 5;
    i (2) < gradesArr.length (5)
    i++
    i = 3
    gradesArr[3] += 5;
    i (3) < gradesArr.length (5)
    i++
    i = 4
    gradesArr[4] += 5;
    i (4) < gradesArr.length (5)
    i++
    i = 5
    i (5) < gradesArr.length (5)
*/

console.log("gradesArr", gradesArr);

// TK 2:
let animalArr = ["dog", "puma", "ostrige", "wheil", "arbok", "pikachu"];

for (let i = 0; i < animalArr.length; i++) {
  console.log(`${animalArr[i]}@gmail.com`);
  //   animalArr[i] += "@gmail.com";
  animalArr[i] = `${animalArr[i]}@gmail.com`;
}
console.log("animalArr", animalArr);

// let num1 = 46000;
// let counter = 0;
// while (num1 > 0) {
//   num1 -= 1000;
//   counter++;
// }
let num1 = 0;
let counter = 0;
while (num1 < 46000) {
  num1 += 1000;
  counter++;
}

let lengthOfAnimalArr = 0;
while (animalArr[lengthOfAnimalArr] !== undefined) {
  lengthOfAnimalArr++;
}
console.log("lengthOfAnimalArr", lengthOfAnimalArr);

//how match numbers between 1 to 10 / 2 bli sheerit

let num2 = 1;
let counter2 = 0;
while (num2 <= 10) {
  if (num2 % 2 == 0) {
    counter2++;
  }
  num2++;
}
console.log("counter2", counter2);
