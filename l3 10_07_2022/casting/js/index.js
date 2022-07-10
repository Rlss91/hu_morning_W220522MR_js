function handleCalcClick() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  console.log("no parsing");
  console.log(`n1 + n2 = ${n1 + n2}`);
  // parseInt(number) => take only the integer
  let z1 = parseInt(n1);
  let z2 = parseInt(n2);
  console.log("parseInt");
  console.log("parseInt(z1) => ", z1, "parseInt(z2) => ", z2);
  console.log(`z1 + z2 = ${z1 + z2}`);
  //parseFloat(number) => convert number as is from string to number
  let d1 = parseFloat(n1);
  let d2 = parseFloat(n2);
  console.log("parseFloat");
  console.log("parseFloat(d1) => ", d1, "parseFloat(d2) => ", d2);
  console.log(`d1 + d2 = ${d1 + d2}`);
  let d11 = +n1;
  let d12 = +n2;
  console.log("+str");
  console.log(`d11 + d12 = ${d11 + d12}`);
  let d21 = Number(n1);
  let d22 = Number(n2);
  console.log("Number");
  console.log("Number(d21) => ", d21, "Number(d22) => ", d22);
  console.log(`d21 + d22 = ${d21 + d22}`);
}

function undefindFunc() {
  let undefinedVar; //this undefinedVar is undefined
  console.log("undefinedVar", undefinedVar);
  if (undefinedVar === undefined) {
    console.log("this var is undefined");
  }
}

function nullFunc() {
  let nullElm = document.getElementById("asjkhdbfw89e7rh320984ru jiwef");
  console.log("nullElm", nullElm);
  if (nullElm === null) {
    console.log("this var is null");
  }
}

function nanFunc() {
  let nanVar = parseInt("abc");
  console.log("nanVar", nanVar);
  if (isNaN(nanVar)) {
    console.log("this var is nan");
  }
}

function typeOfFunc() {
  let z1 = parseInt("55");
  let tov = typeof z1;
  console.log("tov", tov);

  if (tov === "number") {
    console.log("this is a number");
  }

  let tov2 = typeof "55";
  console.log("tov2", tov2);
  let tov3 = typeof true;
  console.log("tov3", tov3);
  let tov4 = typeof undefined;
  console.log("tov4", tov4);
  let tov5 = typeof null;
  console.log("tov5", tov5);
}
