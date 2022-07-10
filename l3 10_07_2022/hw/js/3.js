function handleAgeChange() {
  var age = document.getElementById("ageInput").value;
  var addAlertHere = document.getElementById("addAlertHere");
  if (age >= 0 && age <= 3) {
    addAlertHere.innerHTML = `
    <div class="alert alert-danger" role="alert">
        You are a baby
    </div>`;
  } else if (age >= 4 && age <= 9) {
    addAlertHere.innerHTML = `
    <div class="alert alert-danger" role="alert">
        You are a kido
    </div>`;
  } else if (age >= 10 && age <= 17) {
    addAlertHere.innerHTML = `
    <div class="alert alert-danger" role="alert">
        You are a teen
    </div>`;
  } else if (age >= 18 && age <= 70) {
    addAlertHere.innerHTML = `
    <div class="alert alert-danger" role="alert">
        You are a adult
    </div>`;
  } else if (age >= 71 && age <= 120) {
    addAlertHere.innerHTML = `
    <div class="alert alert-danger" role="alert">
        You are a pensiya
    </div>`;
  } else {
    addAlertHere.innerHTML = `
    <div class="alert alert-danger" role="alert">
        please enter age between 0 to 120
    </div>`;
  }
}
