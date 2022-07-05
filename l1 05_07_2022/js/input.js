function handleChangeBgColor() {
  console.log(document.getElementById("inputcolor").value);
  /*
    each input store data from user in value field
    we will take the value and will put it in 
    backgroundcolor of the div elm
  */
  document.getElementById("divcolor").style.backgroundColor =
    document.getElementById("inputcolor").value;
}
