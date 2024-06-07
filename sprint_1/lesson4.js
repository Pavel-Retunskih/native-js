// let fruit = {
//   color: 'apple', //статическое св-во
//   size: 'small', //статическое св-во
// };

// let obj = {
//   value: 'key', //статическое св-во
// };

// console.log(obj);

//без использования динамических(вычисляемых) св-в
// function createObj(key, value) {
//   let newObj = {};
//   newObj[key] = value;

//   return newObj;
// }

// console.log(createObj('fruit', 'test_value'));//{ fruit: 'test_value' }

//пример с использованием динамических(вычисляемых) св-в
// function createObj2(key, value) {
//   return {
//     [key]: value,
//   };
// }

// console.log(createObj2('vegeatble', 'tomato'));//{ vegeatble: 'tomato' }

//Динамические(можно еще называть вычисляемые) св-ва - вычисляются в момент выполнения кода, отличительной особенностью
//является квадратные скобочки при описании св-ва

// let obj = {
//     [выражение]: значение
// }

//case1

// let propertyName = 'age';

// let person = {
//   name: 'John', //статическое св-во
//   [propertyName]: 26, //динамическое(вычисляемое св-во)
// };

// console.log('person', person); //person { name: 'John', age: 26 }

//////

// let propertyName = true;

// let person = {
//   name: 'John', //статическое св-во
//   [propertyName ? 'isStudent' : 'isTeacher']: propertyName ? 'yes' : 'yes, he is teacher', //динамическое(вычисляемое св-во)
// };

// console.log('person', person); //person { name: 'John', age: 26 }

//case 2

// let prefix = 'status';

// const user = {
//   [prefix + '_id']: '123affs-4fggffh-6ghghgh',
//   [prefix + '_name']: 'pending',
// };

// console.log('user:', user); //user: { status_id: '123affs-4fggffh-6ghghgh', status_name: 'pending' }

//case 3

// let index = 5;

// let obj = {
//   [index + 4]: 'nine',
// };

// console.log('obj', obj);//obj { '9': 'nine' }

//case4

// function sum(a, b) {
//   return a + b;
// }

// const testObj = {
//   [sum(1, 3)]: sum(1, 3),
// };

// console.log('testObj: ', testObj); //testObj:  { '4': 4 }

//case 5
// let testObj = {
//   ['age' + 2]: '32',
//   [2 + 2]: 'four',
// };

// console.log('testObj', testObj); //testObj { '4': 'four', age2: '32' }

//case 6
// function createObj(key, value) {
//   return {
//     [key.toUpperCase()]: value,
//   };
// }

// console.log(createObj('age', '32'));//{ AGE: '32' }

//case7

// const STATUS_BUSY = 'busy';
// const STATUS_READY = 'ready';

// const STATUS_LABELS = {
//   [STATUS_BUSY]: 'ожидает',
//   [STATUS_READY]: 'готово',
// };

// const drivers = [
//   { name: 'Igor', status: 'busy' },
//   { name: 'Natasha', status: 'ready' },
//   { name: 'Ilia', status: 'busy' },
// ];

// const driversStatuses = drivers.map((driver) => {
//   console.log('driver: ', driver);
//   const { status } = driver;
//   console.log('status: ', status);
//   return STATUS_LABELS[status];
// });

// console.log(driversStatuses); //[ 'ожидает', 'готово', 'ожидает' ]

//Object.values(), Object.keys(), Object.entries()

//Object.keys() - возвращает массив ключей у объекта

// const user = {
//   name: 'Ivan',
//   age: 32,
//   isMarried: 'yes',
// };

// const result = Object.keys(user);

// console.log('result: ', result); //result:  [ 'name', 'age', 'isMarried' ]

//Object.values() - возвращает массив значений у объекта

// const user = {
//   name: 'Ivan',
//   age: 32,
//   isMarried: 'yes',
// };

// const resultValues = Object.values(user);
// console.log('resultValues', resultValues); //resultValues [ 'Ivan', 32, 'yes' ]

// const user = {
//   name: 'Ivan',
//   age: 32,
//   isMarried: 'yes',
//   testObj: {
//     user: 'name',
//   },
// };

// const resultValues = Object.values(user);
// console.log('resultValues', resultValues); //resultValues [ 'Ivan', 32, 'yes' ]

//Object.entries() - возвращает массив пар у объекта

// const user = {
//   name: 'Ivan',
//   age: 32,
//   isMarried: 'yes',
// };

// const result = Object.entries(user);
// console.log('result', result); //result [ [ 'name', 'Ivan' ], [ 'age', 32 ], [ 'isMarried', 'yes' ] ]

// function getAllKeys(obj) {
//   let keys = [];

//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       keys = keys.concat(getAllKeys(obj[key]));
//     } else {
//       keys.push(key);
//     }
//   }

//   return keys;
// }

// function getAllValues(obj) {
//     let values = [];

//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             values = values.concat(getAllValues(obj[key]));
//         } else {
//             values.push(obj[key]);
//         }
//     }

//     return values;
// }

// const nestedObj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: 4,
//     },
//   },
//   g: 5,
// };

// const keys = getAllKeys(nestedObj);
// console.log(keys); // Output: ['a', 'c', 'e', 'f', 'g']

//new Map , new Set

//Map - коллекция ключ\значение, как и наш Объект. Но основная разница в том,
// что у нас с вами могут быть ключи любого типа

// let map = new Map();
// // console.log('map:', map);//map: Map(0) {}

// map.set('1', 'one');
// map.set(1, 'number');
// map.set(true, 'boolean value');

// // console.log('map: ', map); //map:  Map(3) { '1' => 'one', 1 => 'number', true => 'boolean value' }
// // console.log(typeof map);//object

// // console.log(map.get(true)); //boolean value
// // console.log(map.get(1));//number

// // console.log(map.has(1)); //true
// // console.log(map.has(4));//false

// // map.delete('1');
// // console.log('map: ', map);//map:  Map(2) { 1 => 'number', true => 'boolean value' }

// map.clear();

// console.log(map); // Map(0) {}

// let map = new Map();

// map.set('1', 1);
// console.log(map);//Map(1) { '1' => 1 }
// console.log(map.size); //1

//////////

// let mapNew = new Map([
//   ['name', 'Ivan'],
//   ['age', 32],
//   ['isMarried', 'yes'],
// ]);

// console.log('mapNew: ', mapNew); //mapNew:  Map(3) { 'name' => 'Ivan', 'age' => 32, 'isMarried' => 'yes' }

// new Set() - особый вид коллекции, "множество значений(без ключей)", у нас каждое значение
//может появляться только один раз

// const set = new Set();
// // console.log('set: ', set);//set:  Set(0) {}

// set.add('1');
// set.add(true);
// set.add('1');

// // console.log('set: ', set);//set:  Set(2) { '1', true }

// console.log(set.has(true)); //true
// console.log(set.has('new value')); //false

// set.delete('1');
// console.log('set after deleting: ', set); //set after deleting:  Set(1) { true }

// set.clear();
// console.log('set after clear: ', set); //set after clear:  Set(0) {}

// let set = new Set();

// set.add('1');
// console.log(set);//Set(1) { '1' }
// console.log(set.size); //1

/////

// const newMap = new Set(['1', '2']);

// console.log(newSet); // Set(2) { '1', '2' }

// let numbers = [1, 1, 1, 2, 3, 5, 6, 7, 8, 8, 9, 10];

// let uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers); // Set(9) { 1, 2, 3, 5, 6, 7, 8, 9, 10 }

// let uniqueArray = [...uniqueNumbers];
// console.log('unique array', uniqueArray); //unique array [
// //     1, 2, 3,  5, 6,
// //     7, 8, 9, 10
// //   ]

//in one line:
// const result = [...new Set(numbers)];
// console.log('result: ', result); ////[
//     1, 2, 3,  5, 6,
//     7, 8, 9, 10
//   ]

// const result = Array.from(new Set(numbers));
// console.log(result);
//[
//     1, 2, 3,  5, 6,
//     7, 8, 9, 10
//   ]
