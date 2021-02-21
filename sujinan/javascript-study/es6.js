/* shorthand property names */

{
  const shorthand_1 = {
    name: "Sujin",
    age: "28",
  };

  const name = "Sujin";
  const age = "28";

  const shorthand_2 = {
    name: name,
    age: age,
  };

  const shorthand_3 = {
    name,
    age,
  };

  console.log(shorthand_1, shorthand_2, shorthand_3);

  // Key 와 Value가 동일한 경우 name, 처럼 축약해서 표현 가능
}

/* desctructuring assignment */

{
  //object
  const student = {
    name: "Sujin",
    level: "1",
  };

  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  {
    const { name, level } = student;
    console.log(name, level);
    // 오브젝트안에 있는 key의 이름은 괄호안에 작성 후 = 오브젝트 이름을 입력한다

    // 혹시 오브젝트의 '이름'을 변경하고 싶다면?

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // Array
  const animals = ["Dog", "Cat"];

  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  {
    const [first, second] = animals;
    console.log(first, second);

    // 배열에 들어있는 순서에 맞게, first에는 Dog, second에는 Cat이 들어감
  }

  // desctructuring assignment에서 object를 사용할 때는 {}, 배열은 [] 사용
}

/* Spread Syntax */

{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  // Array Copy
  const arrayCopy = [...array];

  // ... => array안에 들어있는 오브젝트를 각각 한개씩 가져와서 복사
  // => 오브젝트의 주소 값을 가져와서 복사!!

  console.log(array, arrayCopy);

  // 배열 복사 후 배열에 새로운 오브젝트를 추가하고 싶다면
  const arrayCopy2 = [...array, { key3: "key3" }];
  console.log(arrayCopy2);

  // Object
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ["apple", "banana", "kiwi"];
  const fruits2 = ["grape", "mango", "pineapple"];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog: "말티즈" };
  const dog2 = { dog: "시츄" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
  // Object는 Key가 같으면 마지막으로 복사한 오브젝트의 키값이 덮여쓰여진다.
}