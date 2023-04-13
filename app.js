const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".calculator_display");

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = "0";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    if (accumulativeCalculation === "0" && value !== ".") {
      calculation = [];
    }
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
