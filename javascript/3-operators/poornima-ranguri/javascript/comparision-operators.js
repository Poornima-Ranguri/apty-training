function convertValue(value, type) {
    try {
      switch (type) {
        case "number":
          return parseFloat(value);
        case "boolean":
          return value.toLowerCase() === "true";
        case "array":
          return JSON.parse(value);
        case "object":
          return JSON.parse(value);
        case "date":
          return new Date(value);
        case "null":
          return null;
        case "undefined":
          return undefined;
        default:
          return value;
      }
    } catch (error) {
      alert(
        `Error parsing ${type}: ${error.message}. Please check your input format.`
      );
      return null;
    }
  }

  
  function getValuesAndCompare(compareFunction) {
    const value1 = document.getElementById("value1").value;
    const type1 = document.getElementById("type1").value;
    const value2 = document.getElementById("value2").value;
    const type2 = document.getElementById("type2").value;

    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);

    if (convertedValue1 !== null && convertedValue2 !== null) {
      const result = compareFunction(convertedValue1, convertedValue2);
      document.getElementById("result").innerText = `Result: ${result}`;
    }
  }


  function compareEquality(a, b) {
    getValuesAndCompare((a, b) => a == b);
  }

  function compareStrictEquality(a, b) {
    getValuesAndCompare((a, b) => a === b);
  }

  function compareInequality(a, b) {
    getValuesAndCompare((a, b) => a != b);
  }

  function compareStrictInequality(a, b) {
    getValuesAndCompare((a, b) => a !== b);
  }

  function compareGreaterThan(a, b) {
    getValuesAndCompare((a, b) => a > b);
  }

  function compareLessThan(a, b) {
    getValuesAndCompare((a, b) => a < b);
  }

  function compareGreaterOrEqual(a, b) {
    getValuesAndCompare((a, b) => a >= b);
  }

  function compareLessOrEqual(a, b) {
    getValuesAndCompare((a, b) => a <= b);
  }