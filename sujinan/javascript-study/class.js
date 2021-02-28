"use strict";

// Object-oriendted programming (객체지향프로그래밍)
// class: template
// object:  instance of class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // consturctor
  constructor(name, age) {
    // field
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const sujin = new Person("sujin", 28);
console.log(sujin.name);
console.log(sujin.age);

sujin.speak();

// 2. Getter and Setters
// 클래스를 사용하는 사용자가 바보같은 값을 사용해도,
// 우리가 좀 더 방어적인 자세로 만들어주는 것이 getter & setter

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // return this.age;
    return this._age;
  }

  // age 라는 getter를 정의하는 순간,
  // constructor 의 this.age는 메모리에 올라가 있는 데이터를 불러오는 것이 아니라,
  // 바로 getter를 호출하게 됨.

  set age(value) {
    /* if (value < 0) {
      throw Error("age can not be negative");
    } */

    // this.age = value;
    this._age = value < 0 ? 0 : value;
  }
  // setter를 정의하는 순간,
  // constructor의 = age; 을 호출할때 즉, 메모리의 값을 할당하는 것이 아니라,
  // 이 setter를 호출하게 됨.
  // setter 안에서 전달된 value를 this.age에 할당할 때,
  // 메모리의 값을 update하는 것이 아니라, 이 setter를 호출 합니다.
  // => Uncaught RangeError: Maximum call stack size exceeded
}

const user1 = new User("Steve", "job", -1);
console.log(user1.age);

// 3. Field (private, public)
// 가장 최근에 추가 됨
class Experiment {
  publicField = 2; // public
  #privateField = 0; // '#' private
  // 클래스 내부에서만 값이 보여지고, 접근이 되고, 변경이 가능하지만,
  // 클래스 외부에서는 이 값을 읽을 수도, 변경할 수도 없다.
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// 5. Inheritance 상속
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 method도 호출 되고, 그 뒤에 자식의 draw method도 호출된다.
    console.log("triangle");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  // 필요한 함수들만 overriding 할 수 있다.
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // T
// 이 오브젝트가 이 클래스를 이용해서 만들어진 것인지 아닌지 구별
// boolean 값
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T
console.log(triangle.toString());
