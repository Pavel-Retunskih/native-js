import { foo } from "./lesson7.mjs";
// globalLE {startEngine: function, speed: undefined} --> null
// startEngine()

// let car = "bmw"; // globalLE {startEngine: function, speed: undefined, car: 'bmw'} --> null

// function startEngine() {
//   const car = "toyota";
//   // console.log(`Start ${car}`);

//   return () => {
//     console.log(`Start ${car}`);
//   };
// }

// var speed = 200 // globalLE {startEngine: function, speed: 200, car: 'bmw'} --> null

// const bar = () => {}// globalLE {startEngine: function, speed: 200, car: 'bmw', bar: function} --> null

// // car = "audi";

// const foo = startEngine();
// // const bar = startEngine();

// // console.log(foo === bar)

// foo();

// function foo() {
//   console.log("hi");
// }

// const foo = function () {
//   console.log("hi");
// };

// const foo = () => {
//   console.log("hi");
// };

// console.log(a);

// var a = 20; //globalLE {a: 20} --> null

// // const a = 20

// switch (10) {
//   // switchLE {}
//   case 0:
//     console.log(a);
//   case 10:
//     let a = 10; //globalLE {a: 20} --> null // switchLE {a: 10}
// }

// console.log(a);

// --------------------------

//globalLE {foo: function} --> null

// let a = 10; //globalLE {foo: function, a: 10} --> null

// function foo() {
//   // fooLE {} --> globalLE
//   a = 30;
//   const bar = () => {
//     // barLE{} --> fooLE
//     // let a = 20;
//     debugger;
//     console.log(a);
//   };

//   bar();
// }

// foo();
// foo();

// --------------------------

// globalLE {counterCreator: function}

// function counterCreator() {
//   let count = 0;

//   return () => {
//     console.log(++count);
//   };
// }

// const counter1 = counterCreator();
// const counter2 = counterCreator();

// counter1();
// counter1();
// counter1();

// counter2();
// counter2();
// counter2();

// --------------------------

// 2(4) --> 2 * 2(3) --> 2 * 2 * 2(2) --> 2 * 2 * 2 * 2(1)
// let count = 0;
// const pow = (n, x) => {
//   // {n: 2, x: 3} --> global
//   console.log(++count);
//   if (x === 1) {
//     return n;
//   } else {
//     return n * pow(n, x - 1);
//   }
// };

// console.log(pow(2, 0));

// // 5! --> 5 * 4! --> 5 * 4 * 3! --> 5 * 4 * 3 * 2! --> 5 * 4 * 3 * 2 * 1!

// const factorial = (x) => {
//   if (x === 1) {
//     return x;
//   } else {
//     return x * factorial(x - 1);
//   }
// };

// console.log(factorial(15));
