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
