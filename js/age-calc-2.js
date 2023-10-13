// let birthYear = 0;

// do {

// birthYear = +prompt("Please enter your year of birth to be a positive integer (e.g. 1995):")
// }
//  while (isNaN(birthYear) || birthYear === 0)

// let futureYear;

// do {

// futureYear = +prompt("Please enter the desired year to be a positive integer (e.g. 2023)")
//  } while (isNaN(futureYear) || futureYear === 0)


 
// if(futureYear >= birthYear){

// let age = futureYear - birthYear;
// console.log (`I will be either ${age-1} or ${age} in ${futureYear}`); //calculate age(s)

// //display output "eitler or"

// }else if(futureYear === birthYear){
//     console.log(`You are born in ${futureYear}`);
// } else{
//     console.log(`You were not born in ${futureYear}`);
// }






/*
 * Recap: Age Calculator
​
​
let birthYear;
birthYear = prompt("Please enter your year of birth:");
birthYear = Number(birthYear); //Number
​
while(birthYear<1 || isNaN(birthYear)){
    alert("The input is not correct. Please try again.");
    birthYear = +prompt("Please enter your year of birth:");
}
​
let targetYear;
do {
    targetYear = +prompt("Please enter the targeted year:");
} while(targetYear<1 || isNaN(targetYear));
​
 */
let birthYear;
birthYear = getUserInput("Please enter your year of birth:");
​
let targetYear;
targetYear = getUserInput("Please enter the targeted year:");
​
if(targetYear >= birthYear){
    let age = targetYear - birthYear;
    alert(`I will be either ${age-1} or ${age} in ` + targetYear);  
} else {
    alert("I was not yet born in " + targetYear);
}
​
//functions
function getUserInput(promptMsg){
    let userInput = +prompt(promptMsg);
    while(isUserInputInvalid(userInput)){
        alert("The input is not correct. Please try again.");
        userInput = +prompt(promptMsg);
    }
    return userInput;
}
​
function isUserInputInvalid(userInput){
    if(userInput<1 || isNaN(userInput)){
        return true;
    }
    return false;
}