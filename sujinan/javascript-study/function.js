// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - perfoms a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function helloPrint() {
  console.log("Hello World!");
}

helloPrint();

function log(message) {
  console.log(message);
}

log("Hello@");

// Parameters
// premtive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "coder";
}

const sujin = { name: "sujin" };
changeName(sujin);
console.log(sujin);

// 3. Default Paremeters ( added in ES6 )
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

showMessage("Hi");

// 4. Rest Parameters ( added in ES6 )

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("dreams", "comes", "ture");

// 5. Local Scope

let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variable

  console.log(message);
  console.log(globalMessage);

  function printAnother() {
    console.log(mesasge);
    let childMesage = "hello";
  }
}

printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, Early exit

// bad
function upgradUser(user) {
  if (user.point > 10) {
    // long upgrad logic
  }
}

// good
// 조건이 맞지 않는 경우 빨리 return
function upgradUser(user) {
  if (user.point <= 10) {
    return;
  } else {
  }
}

// First-class Function
// functions are treated like any other variable
// can be assigned as a value to variables
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when execution reaches it.

const print = function print() {
  // 함수에 이름이 없는 함수 = anonymous function
  console.log("print");
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 2));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("Yes!");
};

const printNo = function () {
  console.log("no");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow Function
// always anonymous

const simplePrint = function () {
  console.log("simple print");
};

const simplePrint2 = () => console.log("simple print");
const add = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression
// 함수 선언과 동시에 실행
(function hello() {
  console.log("IIFE");
})();

function calculates(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unkonw command");
  }
}

console.log(calculates("remainder", 3, 6));
