let birthYear = Number(prompt("Please enter your year of birth: "));
// let futureYear = +prompt("Please enter the desired year: ");
// Constraintors:
// futureYear has to be later than or equal to the birthYear
// both input value are integers, length is at least 4, positive numbers, not below 1990
// we focus on positive integers
if (isNaN(birthYear) || birthYear === empty) {
    alert("This is not a valide input. Please try again");
    birthYear = +prompt("Please enter your year of birth: ");
}
else {
    let futureYear = +prompt("Please enter the desired year: ");
    alert("This is not a valide input. Please try again");
    futureYear = +prompt("Please enter the desired year: ");
}


