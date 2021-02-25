// Operator

// 1. String Concatenation
console.log("my " + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric Operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(2 ** 3); // exponetiation

// 3. Increment and Decrement Operators

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Assignment Operator
let x = 3;
let y = 6;

x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical Operators || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthly value

console.log(`or: ${value1 || value2 || check()}`);
// heavy한 연산이 필요한 check의 경우, 맨 뒤에 조건을 넣으면,
// value1, value2가 true일떄, check 함수를 실행하지 않으므로 효율적

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("No");
  }
  return true;
}

// && (true), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullable Object && nullableObject.something
// => null Object가 null이 아닐때만 nullObject.something을 받아 옴
// 즉 && 연산자로 null 값인지 아닌지 확인 가능

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("No");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFice = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFice);
console.log(stringFive != numberFice);

// === strict equlity , no type conversion
console.log(stringFive === numberFice);
console.log(stringFive !== numberFice);
