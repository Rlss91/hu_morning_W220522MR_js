/*
    switch case is the same like if else
    the variable that we will pass in between the () 
    will be the variable
    that we will compare the cases to.
    js will execute all the commands untill the first break
*/
// var selectedColor = "android";
// switch (selectedColor) {
//   case "apple":
//     console.log("paint to red");
//     break;
//   case "android":
//     console.log("paint to green");
//     break;
//   case "windows":
//     console.log("paint to blue");
//     break;
// }

/*
    in this case if the user will choose apple it will display red and green
    because apple not included break.
*/
// var selectedColor = "apple";
// switch (selectedColor) {
//   case "apple":
//     console.log("paint to red");
//   case "android":
//     console.log("paint to green");
//     break;
//   case "windows":
//     console.log("paint to blue");
//     break;
// }

/*
    if the user selected something that not exist it will go to default
*/
// var selectedColor = "big";
// switch (selectedColor) {
//   case "apple":
//     console.log("paint to red");
//     break;
//   case "android":
//     console.log("paint to green");
//     break;
//   case "windows":
//     console.log("paint to blue");
//     break;
//   default:
//     console.log("you can write only red, green or blue ");
//     break;
// }

/*
    if the user selected something that not exist it will go to default
*/
var selectedColor = "big";
switch (selectedColor) {
  case "apple":
    console.log("paint to red");
    break;
  default:
  case "android":
    console.log("paint to green");
    break;
  case "windows":
    console.log("paint to blue");
    break;
}
