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

/* Default Parameters */

{
  // 파라미터 옆에 default parameter 값 바로 적용 가능
  function printMessage(message = "defalut message") {
    /*
      if (message = null) {
          console.log('default message');
      }
    */
    console.log(message);
  }

  printMessage("Hello World!");
  printMessage();
}

/* Ternary Operator */
{
  const isCat = true;
  {
    let component;
    if (isCat) {
      component = "Dog";
    } else {
      component = "Cat";
    }

    console.log(component);
  }

  {
    const component = isCat ? "Dog" : "Cat";
    console.log(component);
  }
}

/* Template Literals */
{
  const weather = "Sunny";
  const temperature = "16";

  console.log(
    "Today weather is " + weather + " and temperature is " + temperature,
  );

  console.log(`Today weather is ${weather} and temperature is ${temperature}`);
  // 문장에 따옴표가 아니라 역슬래쉬 사용하면 ${변수} 사용 가능
  // 변수와 문자열을 + 로 이어주지 않아도 됨.
}

// ES11

/* Optional chaining */
{
  const person1 = {
    name: "Sujin",
    job: {
      title: "S/W engineer",
      manager: {
        name: "Bob",
      },
    },
  };

  const person2 = {
    name: "Bob",
  };

  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }

    printManager(person1);
    //printManager(person2);
  }

  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
      // person 안에 job이 있으면, job안에 manager가 있으면, manager안에 name이 있으면 출력
      // 없으면 undefined
    }
    printManager(person1);
    printManager(person2);
  }
}

/* Nullsh  */

// Logical OR operator
// false: false, '', 0, null, undefined

{
  {
    const name = "Sujin";
    const userName = name || "Guest";

    console.log(userName);
  }

  {
    const name = null;
    const userName = name || "Guest";
    // || 을 사용할 경우 버그가 있을 가능성이 크다

    console.log(userName);
  }

  {
    const name = "";
    const userName = name || "Guest";
    // name에 '' 값이 할당되면 false로 간주 되어 Guest가 출력된다.
    // 사용자가 name에 아무 값도 넣고 싶지 않아도 값이 Guest가 된다.

    console.log(userName);
  }

  {
    const num = 0;
    const userNum = num || "undefined";
    // num에 숫자 0이 할당 되어도, 0은 false로 간주 되기 때문에 undefined가 출력됨.

    console.log(userNum);
  }

  {
    const name = "";
    const userName = name ?? "Guest";
    // name에 값이 있으면 사용 / 없으면 Guest를 사용
    // || OR 연산자와 조금 다름
    console.log(userName);

    const num = 0;
    // num에 값이 있으면 사용 / 없으면 Guest를 사용
    const userNum = num ?? "undefined";
    console.log(userNum);
  }
}
