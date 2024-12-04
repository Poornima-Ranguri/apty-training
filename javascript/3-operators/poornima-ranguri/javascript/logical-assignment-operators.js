const value1Element = document.getElementById("value1");
const type1Element = document.getElementById("type1");
const value2Element = document.getElementById("value2");
const type2Element = document.getElementById("type2");

function convertValue(value, type) {
  switch (type) {
    case "number":
      return parseFloat(value);
    case "boolean":
      return value.toLowerCase() === "true";
    case "string":
      return String(value);
    default:
      return value;
  }
}

function applyAndOperator() {
  const value1 = convertValue(value1Element.value, type1Element.value);
  const value2 = convertValue(value2Element.value, type2Element.value);
  const result = value1 && value2;

  document.getElementById("result").innerText = `&&= Result: ${result}`;
}

function applyOrOperator() {
  const value1 = convertValue(value1Element.value, type1Element.value);
  const value2 = convertValue(value2Element.value, type2Element.value);
  const result = value1 || value2;

  document.getElementById("result").innerText = `||= Result: ${result}`;
}

function applyNullishCoalescingOperator() {
  const value1 = convertValue(value1Element.value, type1Element.value);
  const value2 = convertValue(value2Element.value, type2Element.value);
  const result = value1 ?? value2;

  document.getElementById("result").innerText = `??= Result: ${result}`;
}
