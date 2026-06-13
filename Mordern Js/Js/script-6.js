// control flow

const x1 = 20;
const x2 = 30;
if (x1 == 21) {
  console.log(`${x1} is less than ${x2}`);
} else {
  console.log("This will never run");
}

if (x1) console.log("lets get it");
else console.log("lets go");

// switch

const d = new Date(2024, 3, 29, 9, 12, 10);
const month = d.getMonth();
const day = d.getDate();

switch (month) {
  case 3: // month is 0 based, so 3 is april
    console.log(`it is the ${month}rd month`);
    break;
  case 4:
    console.log(`it is the ${month}th month`);
  default:
    break;
}

const calculator = (num1, num2, operator) => {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "/") {
    return num1 / num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else {
    return `please give a correct operator, ${operator} is not a math operator`;
  }
};

const answer = calculator(2, 3, "/");
console.log(Math.abs(answer));

// truthy and falsy values
// falsy values
// false
// 0
// ""
// undefined
// Nan
// null

// truthy and falsy caveats

const children = 0;
// since 0 is a falsy children will be cohersed into false and the falsy  statement will run
if (children != NaN) {
  console.log(`you have ${children} children`);
} else {
  console.log(`please enter the number of children you have`);
}

// checking for empty arrays
const posts = [1];
if (posts.length != 0) {
  console.log("lists posts");
} else {
  console.log("no posts to list");
}

// checking for empty objects

const user1 = {};
if (Object.keys(user1).length !== 0) {
  console.log(`user 1 has a name of ${user1.name}`);
} else {
  console.log("user1 is an empty object");
}

// == vs ===

// == checks value whiles === checks both type and value

// logical operators

// && true for all
// || true for one -- either

// && returns the first falsey value or the last value

let a;

a = 1 && 0 && 2;

console.log(a); // && returns the first falsy value or the last value, in this case 0 is the first falsy value so it is returned, if all values were truthy then the last value would have been returned

// || returns the first truthy value or the last false

let b;

b = 1 || 2 || 0;

console.log(b);

// ?? returns the right side operator when the left side is null or undefined -- nullish coalescing operator

let c;

c == null;

c = c ?? 20;
console.log(c);

// Ternary operator

const age = 9;

// do this else that
age >= 18
  ? console.log("You can vote")
  : console.log("You cannot vote until you are 18 buddy");

// assigning a conditional value to a variable

const name_ = "Flacko";

const userName = name_ == "Flacko" ? true : console.log("Name is not Flacko");

console.log(userName);
