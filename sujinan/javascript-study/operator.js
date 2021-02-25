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
// 타입까지 동일한지 체크하므로 코딩할떄 === 사용이 더 효율적
console.log(stringFive === numberFice);
console.log(stringFive !== numberFice);

// object equality by reference
const sujin1 = { name: "sujin" };
const sujin2 = { name: "sujin" };
const sujin3 = sujin1;

console.log(sujin1 == sujin2);
console.log(sujin1 === sujin2);
console.log(sujin1 === sujin3);

// equality puzzler
console.log("equality puzzler");
console.log(0 == false); // t
console.log(0 === false); // f
console.log("" == false); // t
console.log("" === false); // f
console.log(null == undefined); // f // t
console.log(null === undefined); //f

// 8. Contional Operators: if
// if, else if, else

const name = "dc";
if (name === "dc") {
  console.log("Welcome sujin");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary Operator: ?
// condition ? value1 : value2

console.log(name === "sujin" ? "yes" : "no");

// 10. Switch statment
const browser = "Chrome";

switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all");
    break;
}

// Loops
// While loop, while the condition is truthy,
// body code is executed.

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do wihle: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

// nested loop
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i} j: ${j}`);
  }
}
