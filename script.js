const passwordDis =  document.getElementById("password")
const slider = document.getElementById("myRange")
const rangedis = document.getElementById("rangeDisplay")
const genButton = document.getElementById("gen_button")
const passwordSymbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '<', '>',
    '/', '?', '`', '~'
];

const checkUppercase = document.getElementById("uppercase")
const checkLowercase = document.getElementById("lowercase")
const checkNumber = document.getElementById("number")
const checkSymbols = document.getElementById("symbols") 



let range = slider.value
rangedis.innerHTML = slider.value
slider.oninput = function() {
    rangedis.innerHTML = this.value
    range  = this.value
}

genButton.addEventListener('click', function(event){
    event.preventDefault()    
    passwordDis.innerHTML = passGen(range)  
})

function passGen(length){
    let upperAlpha = ''
    let lowerAlpha = ''
    let numbers = ''
    let symbolsString  = ''

    if(checkUppercase.checked == true){
        upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }else if(checkUppercase.checked == false){
        upperAlpha = ''
    }
    if(checkLowercase.checked == true){
        lowerAlpha = 'abcdeqrstuvwxyz'
    }
    else if(checkLowercase.checked == false){
        lowerAlpha = ''
    }
    if(checkNumber.checked == true){
        numbers = '0123456789'
    }
    else if(checkNumber.checked == false){
        numbers = ''
    }
    if(checkSymbols.checked == true){
        symbolsString = passwordSymbols.join('');
    }
    else if(checkSymbols.checked == false){
        symbolsString  = ''
    }

    let finalString = upperAlpha + lowerAlpha + numbers + symbolsString
    

    let result = ' ';
    const charactersLength = finalString.length;
    for ( let i = 0; i < length; i++ ) {
        result += finalString[Math.floor(Math.random()* charactersLength)];
    }
    console.log(result)
    return result;   
}