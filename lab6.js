// Task 1: Working with variables
console.log("Task 1: Working with variables")
let myNumber = 10;

let myString = "Hello, JavaScript!";

console.log(myNumber);  // Output: 10
console.log(myString);  // Output: Hello, Javascript

// Task 2: Exploring Loops
// Task 2 part 1: Exploring Loops
console.log("\nTask 2: Exploring Loops")
console.log("Task 2 part 1 ")
for (let i = 0; i <= 10; i++) {
    console.log(i); // Outputs numbers from 0 to 10
}
// Task 2 part 2
console.log("\nTask 2 part 2")
for (let i = 1; i <= 5; i++) {
    console.log(3 * i);  // Outputs multiples of 3: 3, 6, 9, 12, 15
}

// Task 3: Discovering Functions
console.log("\nTask 3")
console.log("Task 3 part 1")
function addNumbers(num1, num2) {
    return num1 + num2; // Add the two numbers and return the result
}
console.log(addNumbers(5, 7));
// Task 2 part 2
console.log("\nTask 3 part 2")
function multiplyNumbers(num1, num2) {
    return num1 * num2;  // Multiply the two numbers and return the result
}
console.log(multiplyNumbers(4, 3));