const { ipcRenderer } = require("electron");

function convertTemperature() {
  // Get input value and selected unit
  const inputValue = parseFloat(
    document.getElementById("temperatureInput").value
  );
  if (isNaN(inputValue)) {
    return;
  }
  const selectedUnit = document.getElementById("unitSelect").value;

  // Convert temperature based on selected unit
  let convertedTemperature;
  if (selectedUnit === "celsius") {
    // Celsius to Fahrenheit conversion
    convertedTemperature = (inputValue * 9) / 5 + 32;
  } else {
    // Fahrenheit to Celsius conversion
    convertedTemperature = ((inputValue - 32) * 5) / 9;
  }

  // Display converted temperature
  document.getElementById(
    "convertedTemperature"
  ).innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${
    selectedUnit === "celsius" ? "Fahrenheit" : "Celsius"
  }`;
  // Play the sound
  let audio = new Audio("./assets/sound.mp3");
  audio.play();
}

// For convert
window.addEventListener("keypress", (key) => {
  if (key.key === "Enter") {
    convertTemperature();
  }
});
// For Clear
window.addEventListener("keydown", (key) => {
  if (key.key === "Enter" && key.shiftKey) {
    clearResult();
  }
});
function clearResult() {
  document.getElementById("convertedTemperature").innerText = "";
  document.getElementById("temperatureInput").value = "";
  // Play the sound
  let audio = new Audio("./assets/sound.mp3");
  audio.play();
}
