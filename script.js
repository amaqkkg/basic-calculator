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
let afterCalculate = false;
let afterContinuousCalculate = false;

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
const del = document.querySelector(".delete");

const saveNum = () => {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      if (operator == null) {
        if (displayedNumber == "0" || firstNum == null || afterCalculate == true) {
          displayedNumber = e.srcElement.id;
          afterCalculate = false;
        } else {
          displayedNumber += e.srcElement.id;
        }
        display.textContent = displayedNumber;
        firstNum = displayedNumber;
        // console.log("first number " + firstNum);
      } else {
        if (displayedNumber == "0" || afterContinuousCalculate == true) {
          displayedNumber = e.srcElement.id;
          afterContinuousCalculate = false;
        } else {
          displayedNumber += e.srcElement.id;
        }
        display.textContent = displayedNumber;
        lastNum = displayedNumber;
        // console.log("last number " + lastNum);
      }
    });
  });
};

const setOperator = () => {
  operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
      if (operator == null) {
        operator = e.srcElement.id;
        displayedNumber = "0";
        display.textContent = displayedNumber;
      } else {
        // console.log("calculating using operator btn");
        displayedNumber = operate(firstNum, lastNum, operator);
        display.textContent = displayedNumber;
        firstNum = displayedNumber;
        lastNum = null;
        operator = e.srcElement.id;
        afterContinuousCalculate = true;
      }
    });
  });
};

const startCalculate = () => {
  calculate.addEventListener("click", () => {
    if (firstNum != null && lastNum != null && operator != null) {
      displayedNumber = operate(firstNum, lastNum, operator);
      display.textContent = displayedNumber;
      firstNum = displayedNumber;
      lastNum = null;
      operator = null;
      afterCalculate = true;
    }
  });
};

const resetCalc = () => {
  del.addEventListener("click", () => {
    firstNum = null;
    lastNum = null;
    operator = null;
    displayedNumber = "0";
    display.textContent = displayedNumber;
    afterCalculate = false;
    afterContinuousCalculate = false;
  });
};

function start() {
  saveNum();
  setOperator();
  startCalculate();
  resetCalc();
}

start();
