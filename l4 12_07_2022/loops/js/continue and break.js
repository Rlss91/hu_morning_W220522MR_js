let animalArr = ["dog", "puma", "ostrige", "pikachu", "wheil", "arbok"];

let pikachu = false;
let animalLength = animalArr.length;
for (let i = 0; i < animalLength; i++) {
  if (animalArr[i] === "pikachu") {
    pikachu = true;
    break; //stop the loop
  }
}
if (pikachu === true) {
  console.log("pikachu was found");
} else {
  console.log("pikachu was not found");
}

let counter = 0;
for (let i = 0; i < animalLength; i++) {
  if (animalArr[i] === "puma") {
    continue; //continue to the next loop
  }
  counter++;
}
console.log("counter", counter);
