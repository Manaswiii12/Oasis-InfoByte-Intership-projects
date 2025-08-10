function convertTemperature() {
  const tempInput = document.getElementById("temperature").value;
  const conversionType = document.getElementById("conversionType").value;
  const resultDiv = document.getElementById("result");

  const temperature = parseFloat(tempInput);

  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let result = "";

  switch (conversionType) {
    case "c-to-f":
      result = `${temperature}°C = ${(temperature * 9 / 5 + 32).toFixed(2)}°F`;
      break;
    case "f-to-c":
      result = `${temperature}°F = ${((temperature - 32) * 5 / 9).toFixed(2)}°C`;
      break;
    case "c-to-k":
      result = `${temperature}°C = ${(temperature + 273.15).toFixed(2)}K`;
      break;
    case "k-to-c":
      result = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C`;
      break;
    case "f-to-k":
      result = `${temperature}°F = ${(((temperature - 32) * 5 / 9) + 273.15).toFixed(2)}K`;
      break;
    case "k-to-f":
      result = `${temperature}K = ${(((temperature - 273.15) * 9 / 5) + 32).toFixed(2)}°F`;
      break;
    default:
      result = "Invalid conversion type.";
  }

  resultDiv.textContent = result;
}
