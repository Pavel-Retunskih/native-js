// this

// !'use strict' -> {}
// 'use strict' -> undefined || {} (null, number, string)

// 1. Global scope
// 2. Function (simple func, arrow func)
// 3. call, apply, bind
// 4. function constructor

// ------------------------------

// 1. Global scope

// console.log(this);

// ------------------------------

// 2. Function (simple func, arrow func)

// "use strict";

// function b() {
//   //
//   const a = () => {
//     console.log(this);
//   };

//   a();
// }

// b();

// function showBrand1() {
// 	console.log(car1.brand);
// }

// var brand = "toyota";

// function showBrand() {
//   console.log(this.brand);
// }

// const car1 = {
//   brand: "bmw",
// };

// const car2 = {
//   brand: "kia",
// };

// car1.f = showBrand;
// car2.f = showBrand;

// car1.f();
// car2.f();

// ------------------------------

// 3. call, apply, bind

// var speed = 100;

// const car = {
//   speed: 200,
//   showMaxSpeed() {
//     return console.log(this.speed);
//   },
// };

// const scooter = {
//   speed: 60,
// };

// const ferrari = {
//   speed: 350,
// };

// car.showMaxSpeed.call(scooter, 10, 20);
// car.showMaxSpeed.apply(scooter, [20, 30]);
// car.showMaxSpeed.bind(scooter, 10, 20)();

// car.showMaxSpeed.bind(scooter).call(ferrari);

// setTimeout(car.showMaxSpeed.bind(car), 2000);
// setTimeout(() => car.showMaxSpeed(), 2000);

// function setTimeout(callback, delay) {
//   // delay
//   ///
//   // callback(); () => car.showMaxSpeed()
// }

// ------------------------------

// 4. function constructor

// function CarCreator(brand, speed) {
//   // {}
//   this.brand = brand; // {}.brand = "ferrari" // { brand: 'ferrari" }
//   this.speed = speed; // {}.speed = 350 // { brand: 'ferrari", speed: 350 }
//   // return { brand: 'ferrari", speed: 350 }
//   // return {};
// }

// const ferrari = new CarCreator("ferrari", 350);
// const bmw = new CarCreator("bmw", 200);

// console.log(ferrari);
// console.log(bmw);

// --------------------------------

// const car = {
//   brand: "ferrari",
//   color: "red",
//   showColor() {
//     return `Car color ${this.color}`;
//   },
//   showBrand: () => {
//     return `Car brand ${this.brand}`;
//   },
// };

// console.log(car.showColor()); // red                | red
// console.log(car.showBrand()); // ferrari/undefined  | undefined

// const car = {
//   color: "red",
//   firstShowColor() {
//     console.log("1", this.color);
//   },
//   secondShowColor: () => {
//     console.log("2", this.color);
//   },
//   thirdShowColor() {
// 		// this
//     (() => {
//       console.log("3", this.color);
//     })();
//   },
// };

// car.firstShowColor(); // red
// car.secondShowColor(); // undefined
// car.thirdShowColor(); // red

// const car = { color: "red" };
// const car2 = { color: "black" };

// function foo() {
//   console.log(this.color);
// }

// const bindedFoo = foo.bind(car);
// const bindedBindedFoo = bindedFoo.bind(car2);
// bindedBindedFoo();

// console.dir(foo);
// console.dir(bindedFoo);

// const dialer = {
//   brand: "Toyota",
//   models: ["Yaris", "Corolla", "Prado"],
//   showModelsInDialer() {

// 		function foo (model) {
//       console.log(`Dialer: ${this.brand}, have: ${model}`);
//     }

//     this.models.forEach(foo);
//   },
// };

// dialer.showModelsInDialer();
// console.log(window);

// const obj = {
//   x: 100,
// };

// function foo() {
//   const x = 10;
//   //
//   return {
//     x: 20,
//     bar: () => {
//       console.log(this.x);
//     },
//     baz: function () {
//       console.log(this.x);
//     },
//   };
// }

// obj.f = foo;

// const obj1 = foo();
// obj1.bar(); // 20 || undefined
// obj1.baz(); // 20 || 20

// const obj2 = foo.call({ x: 30 });

// obj2.bar(); // 30 || 30
// obj2.baz(); // 30 || 20

// let y = obj2.bar;
// obj.z = obj2.baz;
// let z = obj2.baz;

// y(); // 30         || undefined || undefined ||
// obj.z(); // undefined  || undefined || 20        ||
