const form = document.querySelector("form");
//below usecase will give empty
// parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value); //input value will convert into integer
  //   console.log(height)
  const weight = parseInt(document.querySelector("#weight").value); //input value will convert into integer
  //   console.log(weight)
  const results = document.querySelector("#results");
  //   console.log(results)

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.6) {
      underWeight.innerHTML = `<span>You are under weight</span>`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      normalWeight.innerHTML = `<span>Your weight is normal</span>`;
    }
    if (bmi > 24.9) {
      overWeight.innerHTML = `<span>You are over weight</span>`;
    }
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
