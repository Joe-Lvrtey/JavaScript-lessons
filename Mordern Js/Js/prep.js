const arr = [1, 2, 1, 1, 2, 2, 3];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

let newArray = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (!newArray.includes(element)) {
    newArray.push(element);
  } else {
    console.log(`${element} already exists in the new array`);
  }
}
console.log(newArray);

//isPalindrum
function isPalin(str) {
  const revStr = str.split("").reverse().join("");
  if (revStr === str) {
    console.log(`${str} is a palindrum`);
    console.log(revStr);
  } else {
    console.log(`${str}  is not a palindrum : `);
    console.log(revStr);
  }
}

isPalin("aba");
isPalin("kofi");

// //

// import { useState, useEffect } from "react";

// type User = { id: number; name: string; email: string };

// export default function UsersList() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetch("/api/users")
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch");
//         return res.json();
//       })
//       .then(data => setUsers(data))
//       .catch(err => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {users.map(u => (
//         <li key={u.id}>{u.name} ({u.email})</li>
//       ))}
//     </ul>
//   );
// }

// //
// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function UsersList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     axios.get("/api/users")
//       .then(res => setUsers(res.data))
//       .catch(err => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {users.map((u: any) => (
//         <li key={u.id}>{u.name}</li>
//       ))}
//     </ul>
//   );
// }

// // import { useQuery } from "@tanstack/react-query";

// type User = { id: number; name: string };

// export default function UsersList() {
//   const { data: users, isLoading, error } = useQuery<User[], Error>({
//     queryKey: ["users"],
//     queryFn: () => fetch("/api/users").then(res => {
//       if (!res.ok) throw new Error("Failed to fetch");
//       return res.json();
//     })
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {users?.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
//   );
// }

for (let index = 1; index <= 100; index++) {
  let i = "";

  if (index % 3 === 0 && index % 5 === 0) {
    console.log(index, "FizzBuzz");
  } else if (index % 3 === 0) {
    console.log(index, "Fizz");
  } else if (index % 5 === 0) {
    console.log(index, "Buzz");
  } else if (index % 7 === 0) {
    i += index;
    console.log(index, i);
  }
}

// array methods needed for React
// map, filter, reduce, find, findIndex, some, every

const numbers = [1, 2, 3, 4, 5];

// map
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers); // returns a new array with the result of the callback function for each element in the array, it does not modify the original array, it takes a callback function as an argument, the callback function takes three parameters, the current element, the index of the current element and the array itself

// filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // returns a new array with the elements that satisfy the condition in the callback function, it does not modify the original array, it takes a callback function as an argument, the callback function takes three parameters, the current element, the index of the current element and the array itself

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // array.reduce is used basically for summing arrays and can be used on objects in array too, takes a callback function and an initial value, the callback function takes two parameters, the accumulator and the current value, the accumulator is the value that is returned from the previous iteration, the current value is the current element in the array, the initial value is the value that is used as the first argument in the first iteration, if no initial value is provided, the first element of the array is used as the initial value and the iteration starts from the second element

// find
const foundNumber = numbers.find((num) => num > 3);
console.log(foundNumber); // find returns the first element that satisfies the condition, if no element satisfies the condition it returns undefined

const foundIndex = numbers.findIndex((num) => num > 3);
console.log(foundIndex); // findIndex returns the index of the first element that satisfies the condition, if no element satisfies the condition it returns -1

// some
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // array.some returns a boolean value, it returns true if at least one element in the array satisfies the condition, otherwise it returns false

// from
const str = "Hello";
const strArray = Array.from(str);
console.log(strArray); // Array.from creates a new array from an array-like or iterable object, it takes a callback function as an optional second argument, the callback function takes three parameters, the current element, the index of the current element and the array itself

// Object Literals

const name = "Flacko";
const age = 23;

const user = {
  name: name,
  age: age,
};

console.log(user);

// with object literals, if the key and value have the same name, we can just write the key once

const user2 = {
  name,
  age,
};

console.log(user2);

// block scope vs function scope

// var is function scoped, it can be accessed anywhere in the function but not outside the function, it is global to the function scope
// let and const are block scoped, they can be accessed only within the block they are declared in, they are not global to the function scope
