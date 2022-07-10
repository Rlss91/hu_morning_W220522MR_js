function handleSelectChanged() {
  var h1id = document.getElementById("h1id");
  var selectid = document.getElementById("selectid");
  //   switch (document.getElementById("selectid").value) {
  //     case "hawk":
  //       h1id.innerText = "hawk";
  //       break;
  //     case "elephant":
  //       h1id.innerText = "elephant";
  //       break;
  //     case "crocodile":
  //       h1id.innerText = "crocodile";
  //       break;
  //     case "cat":
  //       h1id.innerText = "cat";
  //       break;
  //     default:
  //     case "dog":
  //       h1id.innerText = "dog";
  //       break;
  //   }
  if (selectid.value === "0") {
    h1id.innerText = "dog";
  } else {
    h1id.innerText = selectid.value;
  }
}
