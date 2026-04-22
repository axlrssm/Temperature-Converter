function convertTemperature() {
  const inputValue = parseFloat(document.getElementById("tempInput").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultDisplay = document.getElementById("resultDisplay");

  if (isNaN(inputValue)) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  if (fromUnit === toUnit) {
    resultDisplay.textContent = `The temperature is the same: ${inputValue} ${capitalizeFirstLetter(toUnit)}`;
    return;
  }

  let result;

  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") {
      result = (inputValue * 9/5) + 32;
    } else if (toUnit === "kelvin") {
      result = inputValue + 273.15;
    }
  }
  else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") {
      result = (inputValue -32) * 5/9;
    } else if (toUnit === "kelvin") {
      result = (inputValue - 32) * 5/9 +273.15;
    }
  }
  else if (fromUnit === "kelvin") {
    if (toUnit === "celsius") {
      result = inputValue - 273.15;
    } else if (toUnit === "fahrenheit") {
      result = (inputValue - 273.15) * 9/5 + 32;
    }
  }

  resultDisplay.textContent = `Converted Temperature: ${result.toFixed(2)} ${capitalizeFirstLetter(toUnit)}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
} 