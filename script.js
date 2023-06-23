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

const buttons = document.querySelectorAll("button");

const saveNum = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.srcElement.classList == "number") {
        if (displayedNumber == "0") {
          displayedNumber = e.srcElement.id;
        } else {
          displayedNumber += e.srcElement.id;
        }
        display.textContent = displayedNumber;
      } else if (e.srcElement.classList == "operator") {
        num = displayedNumber;
        console.log(num);
        displayedNumber = "0";
        display.textContent = displayedNumber;
        operator = e.srcElement.id;
        console.log(operator);
        return num;
      }
    });
  });
};

saveNum();
