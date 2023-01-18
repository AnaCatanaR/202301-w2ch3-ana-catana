let introNumber = "";
let firstNumber = 0;
let firstNumExist = false;
let secondNumber = 0;
let secondNumExist = false; // Estat
let currentOperator = "";

const introNumberDisplay = document.getElementById("introNumberDisplay");
const previousDisplay = document.getElementById("previousDisplay");
const operatorDisplay = document.getElementById("operatorDisplay");
const clearAll = document.querySelector(".clear");
const squareRoot = document.querySelector(".squareRoot");

const getNumbers = (number) => {
  if (firstNumber === "Error") return;
  if (introNumber.includes(".") && number === ".") return;
  if (introNumber.charAt(0) === "0" && number === 0 && introNumber.length === 1)
    return;
  if (introNumber.length < 10) {
    introNumberDisplay.innerText += number; // Concatena el nr que enviem
    introNumber = introNumberDisplay.innerText; // Recullir nr en la variabl introNr
  }
};

const getOperator = (operator) => {
  if (firstNumber === "Error") return;
  if (operator === "-" && firstNumExist === false && introNumber === "") {
    operatorDisplay.innerText = ""; // Neteja
    introNumberDisplay.innerText = operator; // Posa el nou
  }

  if (introNumber !== "") {
    operatorDisplay.innerText = "";
    operatorDisplay.innerText = operator;
    memoNumber(operator);
    return;
  }

  currentOperator = operator;
  operatorDisplay.innerText = "";
  operatorDisplay.innerText = operator;
};

const memoNumber = (operator) => {
  if (firstNumExist === false) {
    firstNumber = Number(introNumber);
    firstNumExist = true;
    previousDisplay.innerText = firstNumber;
    introNumberDisplay.innerText = "";
    introNumber = ""; // Posem a 0 el valor. no queda cap valor memoritzat
    currentOperator = operator;
  } else if (firstNumExist === true && secondNumExist === false) {
    secondNumber = Number(introNumber);
    secondNumExist = true;
    calculate(operator);
  }
};

squareRoot.addEventListener("click", (event) => {
  if (introNumber !== "") {
    firstNumber = Math.sqrt(Number(introNumber));
    previousDisplay.innerText = firstNumber;
    introNumberDisplay.innerText = "";
    introNumber = "";
    firstNumExist = true;
  }
});

const calculate = (operator) => {
  let result = 0;
  switch (currentOperator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      console.log("error");
  }

  if (result === Infinity || result === -Infinity) {
    firstNumber = "Error";
  } else {
    result % 1 === 0
      ? (firstNumber = result) // Si es enter
      : (firstNumber = Number(result.toFixed(3)));
  }

  currentOperator = operator;
  operatorDisplay.innerText = "";
  operatorDisplay.innerText = currentOperator;
  previousDisplay.innerText = firstNumber; // Pinta el first nr - el result
  resetValues();
};

clearAll.addEventListener("click", () => {
  resetValues();
  previousDisplay.innerText = "";
  firstNumExist = false;
  firstNumber = 0;
  currentOperator = "";
  operatorDisplay.innerText = "";
});

const resetValues = () => {
  secondNumExist = false;
  secondNumber = 0;
  previousDisplay.innerText = firstNumber; // Pinta el first nr - el result
  introNumberDisplay.innerText = "";
  introNumber = "";
};
