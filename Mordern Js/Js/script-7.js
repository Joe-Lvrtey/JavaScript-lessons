// loops and high order array methods

// nested loops

// for every n time the outer loop runs, the inner will run ever its max n times
for (let index = 0; index < 4; index++) {
    console.log('This is the outer loop');

    for (let index = 0; index < 2; index++) {
    console.log('This is the inner loop');        
    }
}

const theBoys = ['Flacko', 'Dbee', 'Salo']

for (let index = 0; index < theBoys.length; index++) {
    if (theBoys[index] == 'Flacko') {
        console.log(`${theBoys[index]} is the Best!`);
    }
}

// do while loops runs at least once even if the condition is false

const i = 2

do {
    console.log(`the loop will run at least once even tho I have set the condition to false`);
} while (i > 3);

// FizzBuzz challenge
for (let index = 1; index <= 100; index++) {
    if (index % 5 === 0 && index % 3 === 0) {
        console.log(`${index}: FizzBuzz`);
    } else if (index % 3 === 0) {
        console.log(`${index}: Fizz`);
    } else if (index % 5 === 0) {
        console.log(`${index}: Buzz`);
    }
    else{
        console.log(index);
    }
}


// for of loop

const items = ['VsCode', 'Chrome', 'Git', 'Github']

for (const iterator of items) {
    if (iterator == 'VsCode') {
        console.log(`${iterator} is the iterator.`);
    }
}

// for in loop

const schools = {
    1: 'Adisco',
    2: 'Presec',
    3: 'Botwe',
    4: 'PC'
}

// get the key

for (const key in schools) {
    console.log(key)
}

// get both key and value

for (const key2 in schools) {
   console.log(key2, schools[key2]);
}


// foreach

const socials = ['LinkedIn','X', 'Ig', 'Fb', 'TikTok']

socials.forEach(social => {
    console.log(`This is the social: ${social}`);
});

// Array.filter methods

const arrrr = ['one', 'two', 'three', 'four']
const result = arrrr.filter(element => element.length > 4);
console.log(result);


const companies = [
    { name : 'comp 1', category: 'Fintech', start : 1900, end: 2005},
    { name : 'comp 2', category: 'Agribuss', start : 1910, end: 2003},
    { name : 'comp 3', category: 'Retail', start : 1920, end: 2000},
    { name : 'comp 4', category: 'E-Commerce', start : 1930, end: 1999},
    { name : 'comp 5', category: 'Retail', start : 1940, end: 2012}
]

// get only retail companies

const getAllRetail = companies.filter(companies => companies.category == 'Retail')

console.log(getAllRetail);

// get companies that started before 1920 and ended before 1999

const compBetween = companies.filter(companies => companies.start >= 1920 && companies.end < 2000 )
console.log(compBetween);

// Array.map

// map returns a new array given the condition that is called on the array
const mapArray = [1,2,3,4]

const result2 = mapArray.map(element => element * 2)
console.log(result2);

// using map to create am array of company names from the companies

const compNames = companies.map(comp => comp.name);
console.log(compNames);

// create an array with company and category

const compCat = companies.map((comp) => {
  return { name: comp.name, 
    category: comp.category}})
console.log(compCat);

// create an array of the number of years the company had been in production

const compYears = companies.map(comp =>{
     return {
        name:comp.name,
        years: comp.end - comp.start
     }})

console.log(compYears);

// array.reduce

// array.reduce used basically for summing arrays and can be used on objects in array too
const numbers = [1,2,3,4,5,6,7]

// prev number starts at 1 since there is no number before, 1 will be addded to 2 and the loop will continue

// initial values can be given to be used as starting points too

const sum = numbers.reduce((prevValue, nextValue) => prevValue + nextValue)
console.log(sum);

const newSet = [2,3,4,5]
const newSum = newSet.reduce(function (prev, next) {
    return prev + next
})

console.log(newSum);

const cart = [
    {id: 1, name: 'Mac', price: 700},
    {id: 2, name: 'Ps5', price: 500},
    {id: 3, name: 'CoD', price: 250},
    {id: 4, name: 'TLOS', price: 300}
]

const totalPrice = cart.reduce(function (prev, next) {
    return prev + next.price;
}, 0);
console.log(totalPrice);


const people = [
    {
        name: 'Flacko',
        email: 'flacko.com',
        age: 26
    },
    {
        name: 'Adwoa',
        email: 'adwoa.com',
        age: 16
    },
    {
        name: 'Tito',
        email: 'flacko.com',
        age: 17
    },
    {
        name: 'Kwasi',
        email: 'kwasi.com',
        age: 14
    }
]

// create an array of only names and email of people younge than 25


const youngPeople = people.filter(comp => comp.age < 25).
map((comp ) => ({
    name: comp.name,
    age: comp.age
}));

console.log(youngPeople);


// adding all positive numbers in an array

// using foreachloop
const numbz = [1, -3, 5, -2, 5, 8, -9]

let initial = 0

numbz.forEach(element => {
    if (element >= 1){
        initial += element
    }
});

console.log(initial);

// using map and reduce

const integers = [10, 0, -2, -3, 15, 20]

const positiveIntegers = integers.filter((pos => 
    pos >= 0)
).reduce((prev,next)=> {
    return prev + next
})

console.log(positiveIntegers);

const words = ['code', 'program', 'develop']
const cap = words.map(comp => comp.charAt(0).toUpperCase() + comp.slice(1, comp.length))
console.log(cap);