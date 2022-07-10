//global variables accesable from another scope
var globalVar = 10;

function f1() {
  var a = 5;
  globalVar = 7;
}
function f2() {
  var a = 7;
}
f1();
console.log("globalVar", globalVar);
// console.log("a", a);

function f3() {
  //! var will be accesable from another scope
  //! this will cause sbugs in complex code
  var a = 5;
  if (a === 5) {
    var b = 7;
  }
  console.log("b", b);
}
f3();

function f4() {
  //! let will be accesable only from the scope that it was declered in
  //! this will cause sbugs in complex code
  let a = 5;
  if (a === 5) {
    let b = 7;
  }
  console.log("b", b);
}
f4();
