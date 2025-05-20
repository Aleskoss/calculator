function add(num1,num2){
  return +num1 + +num2
}
function subtract(num1,num2){
  return num1 - num2
}
function multiply(num1,num2){
  return num1 * num2
}
function divide(num1,num2){
  return num1 / num2
}
let firstNumber = []
let operator = ""
let secondNumber = []
function operate(num1,operator,num2){
  if(operator === "+"){
    return add(num1,num2)
  }else if(operator === "-"){
    return subtract(num1,num2)
  }else if(operator === "*"){
    return multiply(num1,num2)
  }else if(operator === "/"){
    return divide(num1,num2)
  }
}
function populateDisplay(){
  const display = document.querySelector("#display")
  function makeOperation(){
    if(operator !== "" && secondNumber[0] !== undefined){
    display.textContent = operate(firstNumber.join(""),operator,secondNumber.join(""))
    firstNumber = [operate(firstNumber.join(""),operator,secondNumber.join(""))]
    secondNumber = []
    }
  }
  document.addEventListener("click", event => {
    target = event.target
    switch(target.textContent){
      case "+":
        operator = "+"
        display.textContent = ""
        makeOperation()
        break;
      case "-":
        console.log(firstNumber[0])
        operator = "-"
        display.textContent = ""
        makeOperation()
        break;
      case "*":
        operator = "*"
        display.textContent = ""
        makeOperation()
        break;
      case "/":
        operator = "/"
        display.textContent = ""
        makeOperation()
        break;
      case "=":
        makeOperation()
        break;
      default: //default for if user pushes number buttons
        if(operator === ""){
          firstNumber.push(target.textContent)
          display.textContent = firstNumber.join("")
        }else{
          secondNumber.push(target.textContent)
          display.textContent = secondNumber.join("")
        }
    }
  })
}
populateDisplay()
// operate(firstNumber,operator,secondNumber)