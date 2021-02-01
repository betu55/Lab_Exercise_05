toBeCalculated = [];
var finalAnswer = 0;

let textArea = document.querySelector("#strinput");

function _btn0(){
    textArea.value += "0";
}
function _btn1(){
    textArea.value += "1";
}
function _btn2(){
    textArea.value += "2";
}
function _btn3(){
    textArea.value += "3";
}
function _btn4(){
    textArea.value += "4";
}
function _btn5(){   
    textArea.value += "5";
}
function _btn6(){
    textArea.value += "6";
}
function _btn7(){
    textArea.value += "7";
}
function _btn8(){
    textArea.value += "8";
}
function _btn9(){
    textArea.value += "9";
}
function _btnDiv(){
    textArea.value = "";
    var answer = toBeCalculated[0];
    var leny = toBeCalculated.length;

    for (let i = 1; i < leny; i++){
        answer /= toBeCalculated[i];
    }

    console.log(answer);
    textArea.value = parseFloat(answer).toFixed(1);
    textArea.style.color = "blue";
    toBeCalculated = [];
}
function _btnMul(){
    textArea.value = "";
    var answer = toBeCalculated[0];
    var leny = toBeCalculated.length;

    for (let i = 1; i < leny; i++){
        answer *= toBeCalculated[i];
    }

    console.log(answer);
    textArea.value = parseFloat(answer).toFixed(1);
    textArea.style.color = "blue";
    toBeCalculated = [];
}
function _btnSub(){
    textArea.value = "";
    var answer = toBeCalculated[0];
    var leny = toBeCalculated.length;

    for (let i = 1; i < leny; i++){
        answer -= toBeCalculated[i];
    }

    console.log(answer);
    textArea.value = parseFloat(answer).toFixed(1);
    textArea.style.color = "blue";
    toBeCalculated = [];
}
function _btnAdd(){
    textArea.value = "";
    var answer = toBeCalculated[0];
    var leny = toBeCalculated.length;

    for (let i = 1; i < leny; i++){
        answer += toBeCalculated[i];
    }

    console.log(answer);
    textArea.value = parseFloat(answer).toFixed(1);
    textArea.style.color = "blue";
    toBeCalculated = [];
}
function _btnDot(){
    textArea.value += ".";
}
function _btnClear(){
    textArea.value = "";
    toBeCalculated = [];
}
function _btnNxt(){
    toBeCalculated.push(parseFloat(textArea.value));
    textArea.value = "";
    console.log(toBeCalculated);
}