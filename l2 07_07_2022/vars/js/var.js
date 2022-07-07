var x;
x = 1 + 1;
console.log(x);

var y;
y = x + 5;
console.log(y);

var z;
z = y + x;
console.log(z);

var a = 2,
  b = 3,
  c = 4;

console.log(a * b * c);

function handleColorSelectChange() {
  var colorSelect = document.getElementById("colorSelect").value;
  var h1id = document.getElementById("h1id");
  console.log(h1id);
  h1id.style.backgroundColor = colorSelect;
  h1id.innerText = colorSelect;
  document.getElementById("colorInput").value = colorSelect;
}

function handleColorBtnClickTk() {
  var colorInputtk = document.getElementById("colorInputtk");
  var h1idtk = document.getElementById("h1idtk");
  h1idtk.style.color = colorInputtk.value;
  h1idtk.innerText = colorInputtk.value;
  colorInputtk.style.color = colorInputtk.value;
}
