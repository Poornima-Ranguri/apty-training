let value1Element = document.getElementById("value1");
let value2Element = document.getElementById("value2");


function onAdd(){
    const value1 = parseFloat(value1Element.value);
    const value2 = parseFloat(value2Element.value);
    document.getElementById("result").innerText = value1 + value2 
}


function onSubtract(){
    const value1 = Number(value1Element.value)
    const value2 = Number(value2Element.value)
    document.getElementById("result").innerText = value1 - value2
}


function onMultiply(){
    const value1 = Number(value1Element.value)
    const value2 = Number(value2Element.value)
    document.getElementById("result").innerText = value1 * value2
}


function onDivide(){
    const value1 = Number(value1Element.value)
    const value2 = Number(value2Element.value)
    document.getElementById("result").innerText = value1 / value2
}


function onPercentile(){
    const value1 = Number(value1Element.value)
    const value2 = Number(value2Element.value)
    document.getElementById("result").innerText = value1 % value2
}


function onIncrement() {
    let num = document.getElementById("num");
    let valueNumber = Number(num.value)
    valueNumber++; 
    num.value = valueNumber; 
    document.getElementById("result2").innerText = valueNumber; 
}

function onDecrement() {
    let num = document.getElementById("num");
    let valueNumber = Number(num.value)
    valueNumber--; 
    num.value = valueNumber; 
    document.getElementById("result2").innerText = valueNumber; 
}


function clearInputs() {
    document.getElementById("value1").value = ""; 
    document.getElementById("value2").value = "";  
    document.getElementById("num").value = "";    
    document.getElementById("result").innerText = "";  
    document.getElementById("result2").innerText = "";  
}
