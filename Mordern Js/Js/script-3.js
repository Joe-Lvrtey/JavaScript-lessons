// functions, scope and execution context
function substract(param1, param2) {
  return param1 - param2;
}

result = substract(2, 4);
console.log(result);

const addition = (num1 = 3, num2 = 3) => {
  return num1 + num2;
};

const total = addition();
console.log(total);

// rest parameters

const arrays = [1, 2, 3, 4];

// general for loop
for (let index = 0; index < arrays.length; index++) {
  let setcount = 0;
  const element = arrays[index];
  setcount += element;
  console.log(`this is element : ${element}`);
  console.log(`this is setcount: ${setcount}`);
}

// for of loop

function name_(...sums) {
  let all = 0;

  for (const number of sums) {
    all += number;
  }

  return all;
}

result = name_(2, 2, 3, 4);
console.log(result);

// objects as params

const loginUser = (user) => {
  return `The user ${user.name} with an id of ${user.id}  is logged in`;
};

const user = {
  name: "Flacko",
  id: 1,
};

console.log(loginUser(user));
console.log(
  loginUser({
    name: "Flacko2",
    id: 12,
  }),
);

// Arrays as params

const arraysAsParams = (arr) => {
  // get a random numbeer from an array
  let randomNumber = Math.floor(Math.random() * arr.length + 1);
  return randomNumber;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];

console.log(arraysAsParams(arr1));

// scope --> global, function and  local

const x = 100;

console.log(`${x} in global scope`);

function name() {
  const x = 200;
  console.log(`${x}, in function scope`); // this is a local variable and it will not affect the global variable
}

name();

console.log(hoisting()); // this can be done because of hoisting, this works in functions but not in variable declarations
function hoisting() {
  let output = "demonstrating how hoisting works";
  return output;
}

// closures

function outer() {
  let count = 0; // this variable is in the outer function scope and will be accessible to the inner function here because of closure, this is a private variable and cannot be accessed from outside the function

  function inner() {
    count++;
    return count;
  }

  return inner;
}

const counter = outer();

// function statements
function statement() {
  console.log("this is a function statement");
}

statement();

// function expressions

const expression = function () {
  console.log("this is a function expression");
};

expression();

/* 
The difference between function statements and function expressions is that function statements are hoisted and can be called before they are defined, while function expressions are not hoisted and cannot be called before they are defined.
Function statements are also known as function declarations, while function expressions are also known as anonymous functions or lambda functions.
Function expressions can be named or anonymous, while function statements must have a name. Function expressions can be assigned to variables, passed as arguments to other functions, and returned from other functions, while function statements cannot be assigned to variables, passed as arguments to other functions, or returned from other functions.
*/

/* First class functions are functions that can be treated like any other variable, they can be assigned to variables, passed as arguments to other functions, and returned from other functions. 
They can also be stored in data structures like arrays and objects. In JavaScript, functions are first class citizens, which means that they can be treated like any other value.
 */

// arrow functions
const arrowFunction = (param1, param2) => {
  // this is an arrow function, it is a shorter syntax for writing functions, it does not have its own this, arguments, super, or new.target keywords, it cannot be used as a constructor, and it cannot be used with the new keyword
  // they use this from their surrounding function execution context
  return param1 + param2;
};

console.log(arrowFunction(2, 3));
