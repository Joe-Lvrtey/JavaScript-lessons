// block level scope

const z = 100;

if (true) {
  const y = 200; // block scope y cant be accessed outside the block
  console.log(z + y); // z is a global variable so it can accessed here
}

function name2() {
  var num6 = 5; // function scope, it can be accessed anywhere in the function but not outside the function tho declared with var, it can be accessed outside the block but not outside the function, i.e global to the function scope
  return num6;
}

if (true) {
  const a = 3;
  let b = 5;
  var c = 5;
}

// console.log(a); // error -- a not defined
// console.log(b); // error -- b not defined
// console.log(c); // 5, cos var is not block scope , it also works in loops, but this doesnt work in functions.

// nested scope
function parent() {
  const x = 100;

  // but y cant be accessed here
  function child() {
    const y = 200;
    console.log(`accessing x fro here ${x + y}`);
    // x can be accessed here, child can use parent variables
  }

  child(); // call child in the parent
}
parent();

// declaration vs expression
function addDollarSign(value) {
  return `$${value}`;
}

console.log(addDollarSign("Flacko"));

// function expression

const addPlusSign = function (value) {
  return `+${value}`;
};

console.log(addPlusSign("Flacko"));

const minus = (a, b) => a - b; // implicit return
console.log(minus(3, 4));

const double = (a) => a ** 2;
console.log(double(23));
