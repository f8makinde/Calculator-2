
let sumEl = document.getElementById("sum-el");

function add() {
    let number1 = parseFloat(document.getElementById("num1-el").value) 
let number2 = parseFloat(document.getElementById("num2-el").value)
    sumEl.innerHTML = (number1 + number2);
}
function subtract(){
    let number1 = parseFloat(document.getElementById("num1-el").value) 
let number2 = parseFloat(document.getElementById("num2-el").value)
sumEl.innerHTML = (number1 - number2);
}
function divide(){
    let number1 = parseFloat(document.getElementById("num1-el").value) 
let number2 = parseFloat(document.getElementById("num2-el").value)
sumEl.innerHTML = (number1 / number2);
}
function multiply(){
    let number1 = parseFloat(document.getElementById("num1-el").value) 
let number2 = parseFloat(document.getElementById("num2-el").value)
sumEl.innerHTML = (number1 * number2);
}
function del(){
document.getElementById("num1-el").value = "";
document.getElementById("num2-el").value = "";
    sumEl.innerHTML = "";
}