//function for displaying numbers on the screen
function numberValue(num) {
    var answer = document.getElementById("ans");
    answer.value += num;
}

//function for clearing the entire input on the screen
function clearing(clear) {
    var answer = "";
    document.getElementById('ans').value = answer;
}

//Function for deleting an input on the screen
function deleting() {
    var answer3 = document.getElementById('ans').value;
    var answer4 = Array.from(answer3)
    answer4.pop()
    var answer5 = answer4.join('')
    var answer6 = Number(answer5)
    document.getElementById('ans').value = answer6
}

// code for the mathematical symbols
function operator(opSymbol) {
    var operators = document.getElementById('ans')
    switch (opSymbol) {
        case "+":
            operators.value += "+"
            break;
        case "-":
            operators.value += "-"
            break;
        case "*":
            operators.value += "*"
            break;
        case "/":
            operators.value += "/"
            break;
        case "%":
            operators.value += "%"
            break;
        case "+/-":
            operators.value += "-"
            break;
    }
}


// Code for the equal sign
function calc() {
    var answer = document.getElementById('ans').value
    var finalAns = eval(answer)
    document.getElementById('ans').value = finalAns
}



