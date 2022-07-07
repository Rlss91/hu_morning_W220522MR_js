function handleColorInputChange() {
  document.getElementById("h1id").style.backgroundColor =
    document.getElementById("colorInput").value;
  document.getElementById("h1id").innerText =
    document.getElementById("colorInput").value;
}
function handleColorSelectChange() {
  document.getElementById("h1id").style.backgroundColor =
    document.getElementById("colorSelect").value;
  document.getElementById("colorInput").value =
    document.getElementById("colorSelect").value;
  document.getElementById("h1id").innerText =
    document.getElementById("colorSelect").value;
}
function handleCardColor() {
  document.getElementById("cardCol").innerHTML = `
        <div class="card" id="cardToChange">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
  document.getElementById("cardToChange").style.backgroundColor =
    document.getElementById("cardColorSelect").value;
}
