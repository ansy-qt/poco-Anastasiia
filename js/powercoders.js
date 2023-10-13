// - dividable by 5 > Power
// - dividable by 7 > Coders
// - dividable by 5 and 7 > PowerCoders
// rest > number

let number = 14;

while (number <= 100) {
    if (number % 5 === 0 && number % 7 === 0) {
        // continue; to ignore
        console.log("PowerCoders");
        // break; stops 
    } else if (number % 5 === 0) {
        console.log("Power");
    } else if (number % 7 === 0) {
        console.log("Coders");
    } else {
        console.log(number);
    }

    //increment number to end loop some time
    // number = number + 1;
    number++;
}
console.log("End of loop");











do {
    if (number % 5 === 0 && number % 7 === 0) {
        // continue; to ignore
        console.log("PowerCoders");
        // break; stops 
    } else if (number % 5 === 0) {
        console.log("Power");
    } else if (number % 7 === 0) {
        console.log("Coders");
    } else {
        console.log(number);
    }
    //increment number to end loop some time
    // number = number + 1;
    number++;
} while (number <= 100)
console.log("End of loop");

//initialization - condition - iterator


console.log("beginning of loop");

//for(let number=100; number>=1;number-){

for (let number = 1; number <= 100; number++) {

    if (number % 5 === 0 && number % 7 === 0) {
        console.log("PowerCoders");
        //break;

    } else if (number % 5 === 0) {
        console.log("Power");

    } else if (number % 7 === 0) {
        console.log("Coders");

    } else {
        console.log(number);
    }
}