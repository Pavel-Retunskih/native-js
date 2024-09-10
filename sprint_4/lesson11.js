// Class

// function carCreator(brand, maxSpeed) {
//   return {
//     brand: brand,
//     maxSpeed: maxSpeed,
//     startEngine() {
//       console.log(`Start ${this.brand}`);
//     },
//   };
// }

// const car1 = carCreator("bmw", 200);
// const car2 = carCreator("kia", 220);

// console.log(car1.startEngine === car2.startEngine);

// function CarCreator(brand, maxSpeed) {
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
//   // this.startEngine = function () {
//   //   console.log(`Start ${this.brand}`);
//   // };
// }

// // const car1 = new CarCreator("bmw", 200);
// // const car2 = new CarCreator("kia", 220);

// CarCreator.prototype.startEngine = function () {
//   console.log(`Start ${this.brand}`);
// };

// console.log(car1);
// console.log(car2);

// car1.startEngine();
// car2.startEngine();

// console.log(car1.startEngine === car2.startEngine);

// ----------------------

// class Car {
//   #brand;
//   constructor(brand, maxSpeed) {
//     this.#brand = brand;
//     this.maxSpeed = maxSpeed;
//   }
//   startEngine() {
//     console.log(`Start ${this.#brand}`);
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   setBrand(newBrang) {
//     if (newBrang.length < 3) {
//       throw new Error("brand is to short");
//     }
//     this.#brand = newBrang;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrang) {
//     if (newBrang.length < 3) {
//       throw new Error("brand is to short");
//     }
//     this.#brand = newBrang;
//   }
//   static compareCars(car1, car2) {
//     if (car1.maxSpeed > car2.maxSpeed) {
//       console.log(`${car1.brand} is faster than ${car2.brand}`);
//     } else {
//       console.log(`${car2.brand} is faster than ${car1.brand}`);
//     }
//   }
// }

// function compareCars(car1, car2) {
//   if (car1.maxSpeed > car2.maxSpeed) {
//     console.log(`${car1.brand} is faster than ${car2.brand}`);
//   } else {
//     console.log(`${car2.brand} is faster than ${car1.brand}`);
//   }
// }

// const bmw = new Car("bmw", 200);
// const kia = new Car("kia", 220);

// console.log(car1.brand);
// console.log(car2.brand);

// bmw.compareCars(bmw, kia);

// Car.compareCars(bmw, kia);

// car1.brand = "aaa";
// // car1.setBrand("aaa");

// // car1._brand = "BMW";

// car1.startEngine();
// car2.startEngine();

// compareCars(bmw, kia);

// const pr = new Promise(() => {});

// Promise.any

// ------------------

// class Car {
//   #brand;
//   constructor(brand, maxSpeed) {
//     // {}
//     this.#brand = brand;
//     this.maxSpeed = maxSpeed;
//     // return
//   }
//   startEngine() {
//     console.log(`----------------`);
//     console.log(`Start`);
//     console.log(`${this.#brand}`);
//   }
//   stopEngine = function () {
//     console.log(`Stop ${this.#brand}`);
//   };
//   wheels = 4;
//   getBrand() {
//     return this.#brand;
//   }
//   setBrand(newBrang) {
//     if (newBrang.length < 3) {
//       throw new Error("brand is to short");
//     }
//     this.#brand = newBrang;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrang) {
//     if (newBrang.length < 3) {
//       throw new Error("brand is to short");
//     }
//     this.#brand = newBrang;
//   }
//   static compareCars(car1, car2) {
//     if (car1.maxSpeed > car2.maxSpeed) {
//       console.log(`${car1.brand} is faster than ${car2.brand}`);
//     } else {
//       console.log(`${car2.brand} is faster than ${car1.brand}`);
//     }
//   }
// }

// class SuperCar extends Car {
//   constructor(brand, maxSpeed, canFly) {
//     super(brand, maxSpeed);
//     this.canFly = canFly;
//   }
//   startEngine() {
//     super.startEngine();
//     console.log(`! ! ! ! ! ! !`);
//   }
//   fly() {
//     console.log(`${this.brand} is flying`);
//   }
// }

// const bmw = new Car("bmw", 200);
// const kia = new Car("kia", 220);

// const superBmw = new SuperCar("superBmw", 300, true);
// const superKia = new SuperCar("superKia", 330, true);

// // Car.compareCars(superBmw, superKia);
// // SuperCar.compareCars(superBmw, superKia);

// bmw.startEngine();

// superBmw.startEngine();
// // superBmw.fly();

// // console.log(bmw);
// // console.log(kia);
// // console.log(superBmw);

// ------------------

// class Figure {
//   // constructor() {}
//   area() {
//     return 0;
//   }
//   perimeter() {
//     return 0;
//   }
// }

// class Rectangle extends Figure {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     console.log(`Rectangle area ${this.width * this.height}`);
//   }
//   perimeter() {
//     console.log(`Rectangle perimeter ${(this.width + this.height) * 2}`);
//   }
// }
// class Circle extends Figure {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   area() {
//     console.log(`Circle area ${Math.PI * Math.pow(this.radius, 2)}`);
//     return;
//   }
//   perimeter() {
//     console.log(`Circle perimeter ${2 * (Math.PI * this.radius)}`);
//   }
// }

// const rect = new Rectangle(10, 20);
// const circ = new Circle(10);

// rect.area();
// rect.perimeter();

// circ.area();
// circ.perimeter();

// ------------------

class MathUtils {
  static gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  }
  static lcm(a, b) {
    if (a === 0 || b === 0) {
      return 0;
    }

    return Math.abs(a * b) / this.gcd(a, b);
  }
  static isPrime(n) {
    if (n <= 1) {
      return false;
    }

    if (n <= 3) {
      return true;
    }

    if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  }
  static PI = Math.PI;
}

console.log(MathUtils.gcd(2, 4));
console.log(MathUtils.lcm(6, 120));
console.log(MathUtils.PI);
