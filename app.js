
// var vim = document.getElementById("ans").value
// vim = Number(vim)


function seven(num) {
    var answer = document.getElementById("ans");
    answer.value += num;
    var answerMain = Number(answer.value);
    answer.value = answerMain
    // console.log(typeof(answerMain))
}

function clearing(bas) {
    var answer = bas;
    answer = ""
    document.getElementById('ans').value = answer

}

function deleting() {
    var answer3 = document.getElementById('ans').value;
    var answer4 = Array.from(answer3)
    answer4.pop()
    var answer5 = answer4.join('')
    var answer6 = Number(answer5)
    document.getElementById('ans').value = answer6
}

function sumation() {
    var kil = sum(document.getElementById('ans').value)
    console.log(kil)




    // var ii = 0
    // var sumvalue2 = 0
    // var sumvalue = document.getElementById('ans').value;
    // if (sumvalue !== " ") {
    //     ii = 1
    //     sumvalue2 = sumvalue;
    //     sumvalue = 0
    //     console.log(sumvalue2 + sumvalue)
    // }

}







