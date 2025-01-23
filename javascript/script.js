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
    let num1 = []
    let num2 = []
    let sum = 0
    const display = document.querySelector(`#display`)
    const [...buttons] = document.querySelectorAll(`button`)
    buttons.forEach(item => item.addEventListener(`click`,(event) => {
        let targeted = event.target.textContent
        if(targeted == `=`){
            sum = operate(operator,num1.join(``),num2.join(``)).toFixed(5)
            display.textContent = `${sum}`
            num1 = []
            num1.push(sum)
            num2 = []
            operator = 0
        }else if(operator !== 0 && num1.length !== 0){
            num2.push(targeted)
            display.textContent = num2.join(``)
        }else if(targeted === `-` || targeted === `+` || targeted === `/` || targeted === `*`){
            operator = targeted
            display.textContent = targeted
        }else if(num1.length === 0 || operator === 0){
            num1.push(targeted)
            display.textContent = num1.join(``)
            console.log(num1)
        }else if(targeted === `C`){
            num1 = 0
            num2 = 0
            operator = 0
        }
    }))
}
manipulateDom()