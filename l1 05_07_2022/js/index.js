1 + 1; //will calc the resolts only!!!!
console.log("Happy birthday Bar 🎂"); // will display the msg in the console
console.log("1 + 1"); //will display the msg 1 + 1 and will not calc it
console.log(1 + 1); // will calc 1 + 1 and the result 2 will be displayed
// alert("hello world");
document.write("<h2>Came from js</h2>"); // will add new elm to the page
document.write("<h3>h3</h3>");
// =========================================================
console.log(document.getElementById("h2id")); // find elm with h2id id and will display the elm in the console

document.getElementById("h2id").style.color = "red"; //change css from javascript
document.getElementById("h2id").style.backgroundColor = "black";

document.getElementById("cardTitle").innerText = "The new title";

document.getElementById("addCardHere").innerHTML = `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
