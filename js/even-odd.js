let number = +prompt("Enter a number between 0 and 20");

if (number >= 0 && number <= 20) {
  if (number % 2 === 0) {
    alert(`${number} is even`);
  } else {
    alert(`${number} is odd`);
  }
} else {
  alert("Please enter a valid number between 0 and 20");
}




for (let integer = 0; integer <= 20; integer++) {
  if (integer % 2 === 0) {
    console.log(`${integer} is even`);
    alert(`${integer} is even`);
  } else {
    console.log(`${integer} is odd`);
    alert(`${integer} is odd`);
  }
}
