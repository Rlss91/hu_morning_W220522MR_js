var age = 50;

//if age is >= 18
//then it will execute the command inside {}
//in our case it will display in the console you may enter
if (age >= 18) {
  console.log("you may enter");
}

//if age is >= 18
//then it will execute the command inside {}
//else it will execute the command inside {} (of the else)
//in our case if age => 18 then it will display in the console you may enter
//in our case else it will display in the console you shell not pass
if (age >= 18) {
  console.log("you may enter");
} else {
  console.log("you shell not pass");
}

var x = 5,
  y = 30;

if (x * y >= 50) {
  console.log("x * y >= 50");
} else {
  console.log("x * y not >= 50");
}

/*
    tinok 0 to 3
    kido 4 to 9
    teen 10 to 17
    adult 18 to 72
    pensiya 73 to 120
*/
// if (age >= 0 && age <= 3) {
//   console.log("you are tinok");
// } else {
//   if (age >= 4 && age <= 9) {
//     console.log("you are kido");
//   } else {
//     if (age >= 10 && age <= 17) {
//       console.log("you are teen");
//     } else {
//       if (age >= 18 && age <= 72) {
//         console.log("you are adult");
//       } else {
//         if (age >= 73 && age <= 120) {
//           console.log("you are pensiya");
//         }
//       }
//     }
//   }
// }

//if the age >= 0 and age <= 3
if (age >= 0 && age <= 3) {
  console.log("you are tinok");
} else if (age >= 4 && age <= 9) {
  console.log("you are kido");
} else if (age >= 10 && age <= 17) {
  console.log("you are teen");
} else if (age >= 18 && age <= 72) {
  console.log("you are adult");
} else if (age >= 73 && age <= 120) {
  console.log("you are pensiya");
}

//if age >= 0 and age <= 3 or  age >= 4 and age <= 9
if ((age >= 0 && age <= 3) || (age >= 4 && age <= 9)) {
  console.log("you tinok or kido");
}
