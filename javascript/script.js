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
