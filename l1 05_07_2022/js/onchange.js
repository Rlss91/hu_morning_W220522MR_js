function handleColorChange() {
  console.log("event happend");
  document.getElementById("divtochange").style.backgroundColor =
    document.getElementById("colorinput").value;
}

function handleSelectColorChange() {
  document.getElementById("divtochange").style.backgroundColor =
    document.getElementById("colorselect").value;
}
