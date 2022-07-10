function handleTextChange() {
  document.getElementById("addCardHere").innerHTML = `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${
              document.getElementById("exampleInputtext1").value
            }</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
}
