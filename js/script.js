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
  document.addEventListener("click", event => {
    target = event.target
    switch(target.textContent){
      case "+":
        infinityCheck()
        makeOperation()
        operator = "+"
        break;
      case "-":
        infinityCheck()
        makeOperation()
        operator = "-"
        break;
      case "*":
        infinityCheck()
        makeOperation()
        operator = "*"
        break;
      case "/":
        console.log(secondNumber.join(""))
        infinityCheck()
        makeOperation()
        operator = "/"
        break;
      case "=":
        infinityCheck()
        makeOperation()
        break;
      case "CE":
        firstNumber = []
        secondNumber = []
        operator = ""
        display.textContent = ""
        break;
      case ".":
        if(operator === "" && !firstNumber.includes(".") && firstNumber.length > 0){
          addToFirstNumber()
      }else if(!secondNumber.includes(".") && secondNumber.length > 0){
          addToSecondNumber()
        }
        break;
      case "DEL":
        if(operator === "" && secondNumber.length === 0){
          firstNumber.pop()
          display.textContent = firstNumber.join("")
        }else{
          secondNumber.pop()
          display.textContent = secondNumber.join("")
        }
        break;
      default: //default for if user pushes number buttons
        if(operator === ""){
          addToFirstNumber()
        }else{
          addToSecondNumber()
        }
    }
  })
}
function makeOperation(){
    if(secondNumber.length !== 0){
    display.textContent = operate(firstNumber.join(""),operator,secondNumber.join(""))
    firstNumber = [operate(firstNumber.join(""),operator,secondNumber.join(""))]
    secondNumber = []
    }else{
      display.textContent = firstNumber.join("")
    }
  }
function infinityCheck(){
  if(secondNumber.join("") === "0"){
    display.textContent = "Infinity, try again!"
    secondNumber = []
  }
}
function addToFirstNumber(){
  firstNumber.push(target.textContent)
  display.textContent = firstNumber.join("")
}
function addToSecondNumber(){
  secondNumber.push(target.textContent)
  display.textContent = secondNumber.join("")
}
populateDisplay()
// operate(firstNumber,operator,secondNumber)