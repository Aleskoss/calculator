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
function populateDisplay(targ){
  const display = document.querySelector("#display")
    switch(targ){
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
          addToFirstNumber(targ)
      }else if(!secondNumber.includes(".") && secondNumber.length > 0){
          addToSecondNumber(targ)
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
      case "1": //default for if user pushes number buttons
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if(operator === ""){
          addToFirstNumber(targ)
        }else{
          addToSecondNumber(targ)
        }
        break;
    }
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
function addToFirstNumber(target){
  firstNumber.push(target)
  display.textContent = firstNumber.join("")
}
function addToSecondNumber(target){
  secondNumber.push(target)
  display.textContent = secondNumber.join("")
}
document.addEventListener("click", event => {
  let target = event.target
  populateDisplay(target.textContent)
})
document.addEventListener("keyup", event => {
  let key = event.key
  populateDisplay(key)
})
// operate(firstNumber,operator,secondNumber)