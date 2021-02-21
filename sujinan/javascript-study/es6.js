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
