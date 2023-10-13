let number = prompt("Enter a number between 0 and 10");

if (number >= 0 && number <= 10) {
  let result = number * 9;
  
  console.log(`${number} * 9 = ${result}`);
} else {
  console.log("Please enter a valid number between 0 and 10");
}



for (let integer = 0; integer <= 10; integer++) {
    let result = integer * 9;
    console.log(`${integer} * 9 = ${result}`);
}
