let animalArr = ["dog", "puma", "ostrige", "wheil", "arbok", "pikachu"];

console.log("animalArr before", animalArr);

//will add the new cell at the end of the array
animalArr.push("psyduck");

console.log("animalArr push", animalArr);

//will add the new cell at the beginning of the array
animalArr.unshift("charizard");

console.log("animalArr unshift", animalArr);

//will delete the last cell
animalArr.pop();

console.log("animalArr pop", animalArr);

//will delete the first cell
animalArr.shift();

console.log("animalArr shift", animalArr);

//sort
animalArr.sort();

console.log("animalArr sort", animalArr);

//reverse sort
animalArr.reverse();

console.log("animalArr reverse", animalArr);

//find the index by cell value
let index = animalArr.indexOf("arbok");

console.log("indexOf ", index);

//remove cell by index
//               (delete from index, how many cells to delete)
animalArr.splice(3, 1);

console.log("animalArr splice", animalArr);
