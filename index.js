
let sumEl = document.getElementById("sum-el");

function add() {
    let number1 = parseFloat(document.getElementById("num1-el").value) 
   let number2 = parseFloat(document.getElementById("num2-el").value)
    sumEl.innerHTML = (number1 + number2);
    if(isNaN(sumEl.innerHTML)){
        sumEl.innerHTML = "This is not a number, please input a number";
    }
}
function subtract(){
    let number1 = parseFloat(document.getElementById("num1-el").value) 
let number2 = parseFloat(document.getElementById("num2-el").value)
sumEl.innerHTML = (number1 - number2);
if(isNaN(sumEl.innerHTML)){
    sumEl.innerHTML = "This is not a number, please input a number";
}
}
function divide(){
    let number1 = parseFloat(document.getElementById("num1-el").value) 
let number2 = parseFloat(document.getElementById("num2-el").value)
sumEl.innerHTML = (number1 / number2);
if(isNaN(sumEl.innerHTML)){
    sumEl.innerHTML = "This is not a number, please input a number";
}
}
function multiply(){
    let number1 = parseFloat(document.getElementById("num1-el").value) 
let number2 = parseFloat(document.getElementById("num2-el").value)
sumEl.innerHTML = (number1 * number2);
if(isNaN(sumEl.innerHTML)){
    sumEl.innerHTML = "This is not a number, please input a number";
}
}
function del(){
document.getElementById("num1-el").value = "";
document.getElementById("num2-el").value = "";
    sumEl.innerHTML = "";
}