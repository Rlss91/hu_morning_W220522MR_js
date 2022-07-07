/*
    math operators
    +  -  *  /
    %
*/

var x = 5;
x += 2; // x = x + 2;
x -= 2; // x = x - 2;
x *= 2; // x = x * 2;
x /= 2; // x = x / 2;

/*
    logic operators
    && - and
    || - or
    >
    <
    >=
    <=
    == - compare and ignore data type
    === - compare and compare the data types
    != - not equal and ignore data type
    !== - not equal
*/

if (5 == "5") {
  console.log("5 == 5");
}
if (5 === "5") {
  console.log("5 === 5");
}
console.log("5 % 2", 5 % 2);
var h1id = document.getElementById("h1id");

//if we use + then the elm will be part of the string
console.log("for me " + h1id);
//if we use , then the elm will stay elm and will not be part of a string
console.log("for me ", h1id);
