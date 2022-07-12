function handleCalcClick(operator) {
  let num1 = +document.getElementById("num1Input").value;
  let num2 = +document.getElementById("num2Input").value;
  let divAlert = document.getElementById("divAlert");
  switch (operator) {
    case "+":
      divAlert.innerText = num1 + num2;
      break;
    case "-":
      divAlert.innerText = num1 - num2;
      break;
    case "*":
      divAlert.innerText = num1 * num2;
      break;
    case "/":
      divAlert.innerText = num1 / num2;
      break;
  }
}
