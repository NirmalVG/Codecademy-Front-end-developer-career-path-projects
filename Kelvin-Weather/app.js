//The forecast today is 293 kelvin
const kelvin = 293;
//Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;
//Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;
//When we connvert from Celcius to Fahrenheit, we will get a decimal number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
