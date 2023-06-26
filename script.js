const add = function (num1, num2) {
  return parseInt(num1) + parseInt(num2);
};

const subtract = function () {
  let result;
  for (let i = 0; i < arguments.length; i++) {
    if (i === 0) {
      result = arguments[i];
    } else {
      result -= arguments[i];
    }
  }
  return result;
};

const multiply = function () {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result = result * arguments[i];
  }
  return result;
};

const divide = function () {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    result = result / arguments[i];
  }
  return result;
};

let firstNum;
let lastNum;
let operator;
let displayedNumber = "0";

const operate = (firstNum, lastNum, operator) => {
  if (operator == "+") {
    return add(firstNum, lastNum);
  } else if (operator == "-") {
    return subtract(firstNum, lastNum);
  } else if (operator == "x") {
    return multiply(firstNum, lastNum);
  } else if (operator == ":") {
    return divide(firstNum, lastNum);
  } else return lastNum;
};

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculate = document.querySelector(".calculate");
// const delete = document.querySelector(".delete");

const saveNum = () => {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      if (operator == null) {
        if (displayedNumber == "0" || firstNum == null) {
          displayedNumber = e.srcElement.id;
        } else {
          displayedNumber += e.srcElement.id;
        }
        display.textContent = displayedNumber;
        firstNum = displayedNumber;
        console.log(firstNum);
      } else {
        if (displayedNumber == "0") {
          displayedNumber = e.srcElement.id;
        } else {
          displayedNumber += e.srcElement.id;
        }
        display.textContent = displayedNumber;
        lastNum = displayedNumber;
        console.log(lastNum);
      }
    });
  });
};

const setOperator = () => {
  operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
      operator = e.srcElement.id;
      displayedNumber = "0";
      display.textContent = displayedNumber;
    });
  });
};

const startCalculate = () => {
  calculate.addEventListener("click", (e) => {
    if (firstNum != null && lastNum != null && operator != null) {
      displayedNumber = operate(firstNum, lastNum, operator);
      display.textContent = displayedNumber;
      firstNum = null;
      lastNum = null;
      operator = null;
    }
  });
};

function start() {
  saveNum();
  setOperator();
  startCalculate();
}

start();
