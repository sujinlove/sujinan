"use strict";

// 2. Variable
// let (added in ES6)

let name = "sujin";
console.log(name);

name = "hello";
console.log(name);

// Block Scope
// {} 블럭 안에서 선언된 변수들은 블럭 밖에서 사용될 수 없다.
// {} 블럭 밖에서 선언된 변수들은 전역변수라고 하며 어느곳에서나 접근이 가능하다.
{
  let name2 = "sujin";
  console.log(name);

  name2 = "hello";
  console.log(name2);
}

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// => 어디서 선언했는지 상관 없이 제일 위로 선언을 끌어올려주는 것
// has no block scope
// => {} 안에 선언해도, {} 밖에서도 사용 가능

// var 는 아래와 같이 값을 선언하기도 전에 사용이 가능하다.
// let 처럼 선언 전에 변수를 사용하지 못하는 것이 정상

console.log(age);
var age;
console.log(age);
age = 4;
console.log(age);

// a = 4;
// let a;

{
  age = 4;
  var age;
}
console.log(age);

// 3. Contants
// favor immutable data type always for few reasons :
// - security
// - thread safety
// - reduce human mistakes

// 한 번 할당 되면 값이 절대 바뀌지 않음

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable Types
// primitive, single item : number, string, boolean, null, undefined, symbol
// -> 더 이상 작은 단위로 나눌 수 없는 한 가지 아이템
// object, box container
// -> single item들을 여러개 묶어서 한 박스로 관리 할 수 있게 해주는 것이 box container
// function, first-class function
// -> function도 다른 데이터 할당처럼 변수에 할당이 가능하고,
// 또 그렇기 때문에 파라미터로 전달이 가능하고, 또 함수에서 리턴으로 function을 리턴할 수 도 있다.

// Type 4-1. Number

const count = 17; // integer
const size = 17.1; // decimal number

console.log(`value: ${count} , type: ${typeof count}`);
console.log(`value: ${size} , type: ${typeof size}`);

// 값에 상관없이 동일하게 type: number;

// number - special numeric values : infinity, -infinity, NaN

const infinity = 1 / 0;
const negativeIntinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeIntinity);
console.log(nAn);

// Type 4-2. String

const char = "c";
const brendan = "brendan";
const greeting = "Hello " + brendan;

console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `Hi ${brendan}!`; // template literals
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// Type 4-3. Boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3 < 1; // false

console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// Type 4-4. null

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// null로 값이 할당 됨

// Type 4-5. undefined

let x;
console.log(`value: ${x}, type: ${typeof x}`);
// 선언은 되었지만, 값이 정의되지 않음

// Type 4-6. Symbol
// create unique identifier for objects
// 나중에 맵이나 자료구조에서 고유한 식별자가 필요하거나 아니면
// 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을 때, 고유한 식별사가 필요할 때 사용

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2); // false

// 5. Dynamic typing: dynamically typed language
// 런타임 / 프로그램이 동작할 때, 할당된 값에 따라서 타입이 변경될 수 있음
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
