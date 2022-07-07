var x = 5,
  y = 3;
console.log("x + y = " + (x + y));

console.log(x + " + " + y + " = " + (x + y));

console.log(`${x} + ${y} = ${x + y}`);

function handleCreateCard() {
  var cardTitleInput = document.getElementById("cardTitleInput").value;
  var cardDescInput = document.getElementById("cardDescInput").value;
  var div = document.getElementById("div");
  var cardHtml = `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${cardTitleInput}</h5>
            <p class="card-text">${cardDescInput}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  `;
  //   cardHtml =
  //     '<div class="card">' +
  //     '<div class="card-body">' +
  //     ' <h5 class="card-title">' +
  //     cardTitleInput +
  //     "</h5>" +
  //     '<p class="card-text">' +
  //     cardDescInput +
  //     "</p>" +
  //     '<a href="#" class="btn btn-primary">Go somewhere</a>' +
  //     "</div>" +
  //     "</div>";
  div.innerHTML = cardHtml;
}
