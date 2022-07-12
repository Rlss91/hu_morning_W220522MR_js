let animalArr = ["dog", "puma", "ostrige", "wheil", "arbok", "pikachu"];

let colHtml = "";
for (let i = 0; i < animalArr.length; i++) {
  colHtml += `<div class="col">
                    <div class="alert alert-primary" role="alert">${animalArr[i]}</div>
            </div>`;
  //   colHtml =
  //     colHtml +
  //     `<div class="col">
  //             <div class="alert alert-primary" role="alert">${animalArr[i]}</div>
  //     </div>`;
}
// console.log(colHtml);

document.getElementById("animalrow").innerHTML = colHtml;
