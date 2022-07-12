let dateAsPc = Date.now();
console.log("date wierd numbers", dateAsPc);

let date = new Date();
console.log("date", date);

console.log("year", date.getFullYear());

console.log("month", date.getMonth()); //first month is 0

console.log("day", date.getDate());

console.log("day of week", date.getDay()); //first day is 0

console.log("hour", date.getHours());

console.log("minute", date.getMinutes());

console.log("second", date.getSeconds());

let speDate = new Date(1979, 7, 5);
console.log(speDate.getDay());
