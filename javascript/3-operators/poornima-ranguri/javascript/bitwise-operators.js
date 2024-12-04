const value1Element = document.getElementById("value1");
const value2Element = document.getElementById("value2");

function applyAndOperator() {
  const value1 = parseInt(value1Element.value);
  const value2 = parseInt(value2Element.value);
  const result = value1 & value2;

  document.getElementById("result").innerText = `AND (&) Result: ${result}`;
}

function applyOrOperator() {
  const value1 = parseInt(value1Element.value);
  const value2 = parseInt(value2Element.value);
  const result = value1 | value2;

  document.getElementById("result").innerText = `OR (|) Result: ${result}`;
}

function applyXorOperator() {
  const value1 = parseInt(value1Element.value);
  const value2 = parseInt(value2Element.value);
  const result = value1 ^ value2;

  document.getElementById("result").innerText = `XOR (^) Result: ${result}`;
}

function applyNotOperator() {
  const value1 = parseInt(value1Element.value);
  const result = ~value1;

  document.getElementById("result").innerText = `NOT (~) Result: ${result}`;
}

function applyLeftShift() {
  const value1 = parseInt(value1Element.value);
  const shiftValue = parseInt(value2Element.value);
  const result = value1 << shiftValue;

  document.getElementById("result").innerText = `Left Shift (<<) Result: ${result}`;
}

function applyRightShift() {
  const value1 = parseInt(value1Element.value);
  const shiftValue = parseInt(value2Element.value);
  const result = value1 >> shiftValue;

  document.getElementById("result").innerText = `Right Shift (>>) Result: ${result}`;
}
