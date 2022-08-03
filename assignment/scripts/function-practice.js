console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log(`Hello, ${name}`);
}
// Remember to call the function to test
helloName('Sam');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log(addNumbers(1, 3));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}

console.log(multiplyThree(3, 2, 5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
console.log(isPositive(3));
console.log(isPositive(-4));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

//I was confused if we are supposed to add something here since it was already written below!
//The function works though!

console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast( array ) {
 return array?.pop();
}

//My above solution works but I am unsure if this is a good approach.  I believe pop changes the array permanently.  I tried to use 
//array?.[array.length -1] and it gave me a syntax error.
//I also tried both of these solutions without the ? and it would throw an error because it couldn't run 
//.pop or .length on the undefined function.  Would love feedback on this!

console.log(getLast(['bob', 'sue', 'tom']));
console.log(getLast());


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


function find( value, array ){
  for(let i = 0; i < array.length; i++){
    if(value === array[i]) {
      return true; 
    }
  }
  return false;
}

let testArray = [1, 3, 0, 4, 3]
console.log(find(9, testArray));
console.log(find(4, testArray));







// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(string[0] === letter){
    return true;
  } 
  else{
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array


let sumArray = [1, 2, 3, 6];

function sumAll(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum
}

// TODO: loop to add items


console.log(sumAll(sumArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let sampleArray = [0, -3, -2, 1, 3, 4];
let resultArray = [];

function positveNumbers (array){
  for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

console.log(positveNumbers(sampleArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Write a function that checks the sum of two numbers.  If less than 100, return true.
//If not, return false.


function lessThan100(a, b) {
	let sum = a + b;
	if (sum < 100){
		return true;
	}
	return false;
}

//I originally wrote it with an else statement but this also works.  Is one or the other
//best practice?  This is slightly less code.