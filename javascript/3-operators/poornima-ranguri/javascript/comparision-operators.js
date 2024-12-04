let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let type1 = document.getElementById("type1");
let type2 = document.getElementById("type2");

function convertingValueToType(value, type) {
  if (value === "") return null;  // handle empty input

  try {
    switch(type) {
      case "number":
        const numValue = parseFloat(value);
        return isNaN(numValue) ? null : numValue;
      
      case "boolean":
        return value.toLowerCase() === 'true';
      
      case "array":
        try {
          return JSON.parse(value);
        } catch {
          return [];
        }

      case "object":
        try {
          return JSON.parse(value);
        } catch {
          return {}; // empty object if JSON parse fails
        }

      case "date":
        const dateValue = new Date(value);
        return isNaN(dateValue) ? null : dateValue;
     
      case "string":
        return String(value);
      
      default:
        return value;         
    }
  } catch(error) {
    console.error(`Conversion Error: ${error.message}`);
    return null;
  }
}

function compareEquality() {
  let firstValue = convertingValueToType(value1.value, type1.value);
  let secondValue = convertingValueToType(value2.value, type2.value);

  if (firstValue === null || secondValue === null) {
    document.getElementById("result").innerHTML = "Result : Invalid input";
    return;
  }

  let result = firstValue == secondValue;
  document.getElementById("result").innerHTML = `Result : ${result}`;
}

function compareStrictEquality() {
  let firstValue = convertingValueToType(value1.value, type1.value);
  let secondValue = convertingValueToType(value2.value, type2.value);

  if (firstValue === null || secondValue === null) {
    document.getElementById("result").innerHTML = "Result : Invalid input";
    return;
  }

  let result = firstValue === secondValue;
  document.getElementById("result").innerHTML = `Result : ${result}`;
}

function compareInequality() {
  let firstValue = convertingValueToType(value1.value, type1.value);
  let secondValue = convertingValueToType(value2.value, type2.value);

  if (firstValue === null || secondValue === null) {
    document.getElementById("result").innerHTML = "Result : Invalid input";
    return;
  }

  let result = firstValue != secondValue;
  document.getElementById("result").innerHTML = `Result : ${result}`;
}

function compareStrictInequality() {
  let firstValue = convertingValueToType(value1.value, type1.value);
  let secondValue = convertingValueToType(value2.value, type2.value);

  if (firstValue === null || secondValue === null) {
    document.getElementById("result").innerHTML = "Result : Invalid input";
    return;
  }

  let result = firstValue !== secondValue;
  document.getElementById("result").innerHTML = `Result : ${result}`;
}

function compareGreaterThan() {
  let firstValue = convertingValueToType(value1.value, type1.value);
  let secondValue = convertingValueToType(value2.value, type2.value);

  if (firstValue === null || secondValue === null) {
    document.getElementById("result").innerHTML = "Result : Invalid input";
    return;
  }

  let result = firstValue > secondValue;
  document.getElementById("result").innerHTML = `Result : ${result}`;
}

function compareLessThan() {
  let firstValue = convertingValueToType(value1.value, type1.value);
  let secondValue = convertingValueToType(value2.value, type2.value);

  if (firstValue === null || secondValue === null) {
    document.getElementById("result").innerHTML = "Result : Invalid input";
    return;
  }

  let result = firstValue < secondValue;
  document.getElementById("result").innerHTML = `Result : ${result}`;
}

function compareGreaterOrEqual() {
  let firstValue = convertingValueToType(value1.value, type1.value);
  let secondValue = convertingValueToType(value2.value, type2.value);

  if (firstValue === null || secondValue === null) {
    document.getElementById("result").innerHTML = "Result : Invalid input";
    return;
  }

  let result = firstValue >= secondValue;
  document.getElementById("result").innerHTML = `Result : ${result}`;
}

function compareLessOrEqual() {
  let firstValue = convertingValueToType(value1.value, type1.value);
  let secondValue = convertingValueToType(value2.value, type2.value);

  if (firstValue === null || secondValue === null) {
    document.getElementById("result").innerHTML = "Result : Invalid input";
    return;
  }

  let result = firstValue <= secondValue;
  document.getElementById("result").innerHTML = `Result : ${result}`;
}
