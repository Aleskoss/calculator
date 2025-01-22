function add(num1,num2){
    return num1 + num2
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
    console.log(sum)
}


function manipulateDom(){
    let operator = 0
    let num1 = 0
    let num2 = 0
    const display = document.querySelector(`#display`)
    const [...buttons] = document.querySelectorAll(`button`)
    console.log(buttons)
    buttons.forEach(item => addEventListener(`click`,(event) => {
        if(num1 !== 0 && operator !== 0){
            num2 = event.target.innerHTML
        }else if(num1 !== 0){
            operator = event.target.innerHTML
        }
            num1 = event.target.innerHTML
    }))
    console.log(num1)
}
manipulateDom()