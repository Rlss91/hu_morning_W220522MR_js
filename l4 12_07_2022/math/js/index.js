//pow = hezka
console.log(Math.pow(4, 2));

console.log(Math.random());

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let randomNumFrom0To20 = randomNumber(0, 20);
console.log("randomNumFrom0To20", randomNumFrom0To20);

console.log("round", Math.round(5.5));

//floor will round only down
//floor is like parseInt
console.log("floor", Math.floor(5.9));

//will round only up
console.log("ceil", Math.ceil(5.4));
