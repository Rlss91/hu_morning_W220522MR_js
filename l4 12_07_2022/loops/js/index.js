let animalArr = ["dog", "puma", "ostrige", "wheil", "arbok", "pikachu"];

let colHtml = "";
//the for loop will go throw every cell in animalArr
for (let i = 0; i < animalArr.length; i++) {
  // each animal we will create bs col and alert
  // we will add to each alert unique id so we can access the elm when needed
  // add to each alert text with the animal name from array
  colHtml += `<div class="col">
                    <div class="alert alert-primary" role="alert" id="animal_${i}">${animalArr[i]}</div>
            </div>`;
  //   colHtml =
  //     colHtml +
  //     `<div class="col">
  //             <div class="alert alert-primary" role="alert">${animalArr[i]}</div>
  //     </div>`;
}
// console.log(colHtml);

document.getElementById("animalrow").innerHTML = colHtml;

function handleAnimalClick() {
  let animalInput = document.getElementById("animalInput").value;
  //the for loop will go throw every cell in animalArr
  for (let i = 0; i < animalArr.length; i++) {
    //if the animal that the user was typed equal to cell in the array
    if (animalInput === animalArr[i]) {
      //then go to the selected element and change the background color to green
      document.getElementById(`animal_${i}`).style.backgroundColor = "green";
      //stop the loop because you already found the animal
      break;
    }
  }
}
