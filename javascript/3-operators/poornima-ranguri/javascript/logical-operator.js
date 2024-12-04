
function parseValue(value, type) {
    switch(type) {
        case 'string': return value;
        case 'number': return Number(value);
        case 'boolean': return value.toLowerCase() === 'true';
        case 'array': 
            try { return JSON.parse(value); } 
            catch { return []; }
        case 'object': 
            try { return JSON.parse(value); } 
            catch { return {}; }
        case 'null': return null;
        case 'undefined': return undefined;
        default: return value;
    }
}

function performLogicalAnd() {
    const value1 = document.getElementById('value1').value;
    const type1 = document.getElementById('type1').value;
    const value2 = document.getElementById('value2').value;
    const type2 = document.getElementById('type2').value;

    const parsedValue1 = parseValue(value1, type1);
    const parsedValue2 = parseValue(value2, type2);

    const result = parsedValue1 && parsedValue2;
    document.getElementById('result').textContent = `Result: ${result} (${typeof result})`;
}


function performLogicalOr() {
    const value1 = document.getElementById('value1').value;
    const type1 = document.getElementById('type1').value;
    const value2 = document.getElementById('value2').value;
    const type2 = document.getElementById('type2').value;

    const parsedValue1 = parseValue(value1, type1);
    const parsedValue2 = parseValue(value2, type2);
    
    const result = parsedValue1 || parsedValue2;
    document.getElementById('result').textContent = `Result: ${result} (${typeof result})`;
}


function performLogicalNot() {
    const value1 = document.getElementById('value1').value;
    const type1 = document.getElementById('type1').value;

    const parsedValue1 = parseValue(value1, type1);

    const result = !parsedValue1;
    document.getElementById('result').textContent = `Result: ${result} (${typeof result})`;
}



