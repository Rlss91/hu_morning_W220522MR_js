function handleColorChange() {
  var colorInputValue = document.getElementById("colorInput").value;
  /*
    = ha hala (contain)
    == hashvaa (compare)
    Equal to (=) is an assignment operator
    Double equals (==) is a comparison operator
  */
  /*
    if the selected color is red or green or blue
 */
  if (
    colorInputValue == "red" ||
    colorInputValue == "green" ||
    colorInputValue == "blue"
  ) {
    document.getElementById("h1id").style.backgroundColor = colorInputValue;
  }
}
