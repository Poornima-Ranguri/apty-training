let value1Element = document.getElementById("value1");
let value2Element = document.getElementById("value2");

function onAdd(){
    let value1 = parseFloat(value1Element.value);
    let value2 = parseFloat(value2Element.value);
    value1 += value2;  
    document.getElementById("result").innerText = "Result: " + value1;
}

function onSubtract(){
    let value1 = Number(value1Element.value);
    let value2 = Number(value2Element.value);
    value1 -= value2; 
    document.getElementById("result").innerText = "Result: " + value1;
}

function onMultiply(){
    let value1 = Number(value1Element.value);
    let value2 = Number(value2Element.value);
    value1 *= value2;  
    document.getElementById("result").innerText = "Result: " + value1;
}

function onDivide(){
    let value1 = Number(value1Element.value);
    let value2 = Number(value2Element.value);
    if (value2 === 0) {
        document.getElementById("result").innerText = "Error: Division by zero";
    } else {
        value1 /= value2;  
        document.getElementById("result").innerText = "Result: " + value1;
    }
}

function onPercentile(){
    let value1 = Number(value1Element.value);
    let value2 = Number(value2Element.value);
    value1 %= value2; 
    document.getElementById("result").innerText = "Result: " + value1;
}

function onIncrement() {
    let num = document.getElementById("num");
    let valueNumber = Number(num.value);
    valueNumber++; 
    num.value = valueNumber;  
    document.getElementById("result2").innerText = "Result: " + valueNumber;  
}

function onDecrement() {
    let num = document.getElementById("num");
    let valueNumber = Number(num.value);
    valueNumber--;  
    num.value = valueNumber;  
    document.getElementById("result2").innerText = "Result: " + valueNumber;  
}


function clearInputs() {
    document.getElementById("value1").value = ""; 
    document.getElementById("value2").value = "";  
    document.getElementById("num").value = "";    
    document.getElementById("result").innerText = "";  
    document.getElementById("result2").innerText = "";  
}
