console.log("Hello, world");
// let a,b,c;
// a =5, b=6, c=7;
// console.log(a-b);

const name = "Flacko";
console.log(typeof name);

const bigInt = 244444498888n;
console.log(bigInt + 1000n, typeof bigInt);

const newFunc = (_hello) => {
  output = console.log(_hello + " how are you doing?");
  return output;
};

newFunc("Flacko");

const newObj = {
  name: "Flacko",
  age: 28,
  occupation: "software/web developer",
};

const newArr = [0, 1, 2, 3];
let res_ = newArr.length;
console.log(res_);
newArr.push(5);
console.log(newArr);

newArr.forEach((element) => {
  element++;
  console.log(element);
});

// type conversion

let num_ = "100";
console.log(num_, typeof num_);
let converted_ = parseInt(num_);
console.log(converted_, typeof converted_);

console.log(parseInt, typeof parseInt);

let boool = 0;

console.log("this is " + "foo" / "bar");

console.log(Boolean(boool));

// template literals / use of backticks.

const name1 = "Flacko";
const age2 = 26;

console.log(`my name is ${name1} and I am ${age2} years old`);

// .__proto__ => checks the number of methods that can be called on an object

s = "string";

console.log(s.__proto__);

console.log(Math);

console.log(Math.floor(2.9));

// math.round ==> round to the nearest whole number
// math.floor ==> round down
// math.ceil ==> round up

let x = Math.floor(Math.random() * 101);
let y = Math.floor(Math.random() * 51);

let sum1 = x + y;
let diff = x - y;
let quot = x / y;
let remainder = x % y;
let mult = x * y;
console.log(sum1, diff, quot, remainder, mult);

// arays and objects

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

console.log(arr.splice(2, 4)); // removes 4 items starting from index 2 and returns the removed items
console.log(arr); // the original array is modified

// nesting arrays

// splice method on an Array
// takes three params, starting position, number of times to be removed and number of items to be added.

const fruits = ["orange", "bannana", "apple"];
const vegetables = ["lettuce", "carbage", "carrot"];

// fruits.push(vegetables)
x = fruits.concat(vegetables);

console.log(x);

// console.log(fruits[3][0]);

// concats add the array to the first one, every item in the array

// spread operator , also concats two arrays

y = [...fruits, ...vegetables];
console.log(y);

// flatten an array
// flatten takes an array(nested) and make it a single array
const arrr = [1, [3, 4], 5, 7, 5, 8, [6, 2]];
console.log(arrr);
console.log("This is the flatten arrayed", arrr.flat());

const n = Array.isArray(arr);

console.log(n);

console.log(Array.isArray("hello"));

const a = 1;
const b = 2;
const c = 3;
const d = 4;

console.log(`this is the way array.of works ${Array.of(a, b, c, d)}`);

const array = [1, 2, 3, 4, 5];
array.unshift(0);
array.push(6);
y = array.reverse();
console.log(y);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
arr2.shift();
const arr3 = [...arr1, ...arr2];
const sum = arr1.concat(arr2);
console.log(arr3, sum);

// javascript object literals

const obj1 = { vegetables: 1, fruits: 2, drinks: 4 };

let literals = obj1.fruits;
console.log(literals);

console.log(obj1);

const Flacko = {
  name: "Flacko",
  age: 26,
  profession: "software engineering",
  isWorkin: true,
  willGetAdevJobSoon: true,
  address: {
    city: "Accra/Oda",
    street: "presby street",
    phone: "0241040022",
  },
  hobies: ["code", "movies", "music"],
};

console.log(Flacko["willGetAdevJobSoon"]);
console.log(Flacko.address.phone);
console.log(Flacko.hobies[0]);
Flacko.address.phone = "0504521843";
console.log(Flacko);

let phone_ = Flacko.address.city;

delete phone_;
console.log(Flacko);

const obj_ = { a: 1, b: 2 };
const obj__ = { c: 3, d: 4 };
console.log({ obj_ }, { obj__, obj_ });

obj33 = { ...obj_, ...obj__ };
console.log(obj33);

const todos = [
  { name: 1, age: 20, sex: "male" },
  { cars: 1, girls: 7, sex: "female" },
];
let allKeys = todos[0];
console.log(Object.values(todos[0]));

// destructuring

const todoNew = {
  id: 1,
  title: "superbad",
};

// pulling variables out of the object

const { id, title } = todoNew;
console.log(id, title);

// rest operator

const res = [1, 2, 3, 4, 5];

const [fi, se, ...rest] = res;

// console.log(fi,se,rest);

// json --> lightweight data interchange format

const post = {
  id: 1,
  title: "Breaking bad",
};

// convert top json

const json_ = JSON.stringify(post);
// console.log(json_);

const library = [
  {
    title: "Young Sheldon",
    author: "Sheldon Cooper",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Breaking Bad",
    author: "",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Super Bad",
    author: "Seth",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

console.log(library[0]);

// turn the library object into a JSON string

const jsonObject = JSON.stringify(library);

library[0].title = "fisrtBook";
library[0].status.reading = true;
console.log(library);
console.log(jsonObject);
