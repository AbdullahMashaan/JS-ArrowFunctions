// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/



 const greet = (name) => `Hello, ${name}!`;

 console.log(greet("Abdullah"));

// Write a simple arrow function that takes two parameters and returns their sum.

const sum = (firstNum, secondNum) => firstNum + secondNum;

console.log(sum(2, 4));

// Write a simple arrow function that squares a number.

const square = (num) => num**2;
console.log(square(2));




const greet = (name) => `Hello ${name}!`;
console.log(greet ("Abdullah"));
