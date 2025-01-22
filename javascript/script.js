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
    const buttonsDiv = document.querySelector(`#buttons`)
    // buttonsDiv.addEventListener(`click`, (event) =>{
    //     let element = event.target
    //     switch(element.innerHTML){
    //         case `+`:
    //             operator = `+`
    //             display.textContent = `+`
    //             break
    //         case `-`:
    //             operator = `-`
    //             break
    //         case `*`:
    //             operator = `*`
    //             break
    //         case `/`:
    //             operator = `/`
    //             break
    //     }
    //     display.textContent = `${element.innerHTML}`
    //     if(element.localName !== "button"){
    //         display.textContent = num1
    //     }else{
    //     num1 = element.innerHTML
    // }
    //     console.log(num1)
    // })
}
manipulateDom()