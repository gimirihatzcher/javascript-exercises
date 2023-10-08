const convertToCelsius = function(temperature) {
  let num = (5 / 9) * (temperature - 32);

  return Number(num.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let num = ((9 / 5) * temperature) + 32;

  return Number(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
