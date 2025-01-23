function add(num1,num2){
    return +num1 + +num2
}

function substract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1/num2
}

function operate(operator,num1,num2){
    let sum = 0
    switch(operator){
        case `+`:
            sum = add(num1,num2)
            break
        case `-`:
            sum = substract(num1,num2)
            break
        case `*`:
            sum = multiply(num1,num2)
            break
        case `/`:
            sum = divide(num1,num2)
            break
    }
    return sum
}

function manipulateDom(){
    let operator = 0
    let num1 = 0
    let num2 = 0
    let sum = 0
    const display = document.querySelector(`#display`)
    const [...buttons] = document.querySelectorAll(`button`)
    buttons.forEach(item => item.addEventListener(`click`,(event) => {
        if(event.target.textContent == `=`){
            sum = operate(operator,num1,num2)
            display.textContent = `${sum}`
            num1 = sum
            num2 = 0
            operator = 0
        }else if(num1 !== 0 && operator !== 0){
            num2 = event.target.textContent
            display.textContent = event.target.textContent
        }else if(num1 !== 0){
            operator = event.target.textContent
            display.textContent = event.target.textContent
        }else if(num1 === 0){
            num1 = event.target.textContent
            display.textContent = event.target.textContent
        }else if(event.target.textContent === `clear`){
            num1 = 0
            num2 = 0
            operator = 0
        }
    }))
}
manipulateDom()