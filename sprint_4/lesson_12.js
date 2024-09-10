// class Car {
//   constructor(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//     this.state = {};
//   }
//   startEngine() {
//     console.log(`${this.brand} is started`);
//   }
//   stopEngine = () => {
//     console.log(`${this.brand} is stoped`);
//   };
// }
// const car1 = new Car("Kia", 100);

// const car2 = new car1.constructor("BMW", 200);

// console.log(Car.prototype === Object);

// console.log(car2.__proto__.__proto__ === Object.prototype);

// function foo(int) {
//   return console.log(int);
// }

// const foo2 = new foo.constructor("foo2");

// foo2();

//Какое значение получит переменная myResult?
const students = [{ name: "Bob" }, { name: "Alex" }, { name: "Donald" }];
const filteredStudents = students.filter((s) => s.name !== "Kate");
const lengthDiff = students.length - filteredStudents.length;
const newValue = (lengthDiff && 40.11) || (35.9 && 29.92);
console.log(newValue);

//Какое значение получит переменная newValue?
