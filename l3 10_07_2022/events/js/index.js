window.addEventListener("load", function () {
  console.log("your page done loading");
  document.getElementById("clcbtn").addEventListener("click", function () {
    console.log("you pressed on the btn");
  });
});

function handleTxtChanged() {
  //when user done change the input
  console.log("txt changed");
}

function handleTxtInput() {
  //when user input each key
  console.log("txt input");
}

function handleTxtFocus() {
  console.log("txt focus");
}

function handleTxtBlur() {
  console.log("txt Blur");
  let txtid = document.getElementById("txtid").value;
  if (txtid === "") {
    console.log("please enter valid email");
  }
}
