function handleColorChange() {
  var selectedColor = document.getElementById("colorInput").value;
  var h1id = document.getElementById("h1id");
  if (selectedColor == "apple") {
    h1id.style.backgroundColor = "red";
  } else if (selectedColor == "android") {
    h1id.style.backgroundColor = "green";
  } else if (selectedColor == "windows") {
    h1id.style.backgroundColor = "blue";
  }
}
