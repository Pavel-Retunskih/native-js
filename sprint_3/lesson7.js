// // promises
// import { callbachFetch, promiseFetch } from "node-fetch";

// callbachFetch("bookstore.com/authors", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     callbachFetch(`bookstore.com/authors${data.id}`, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         callbachFetch(
//           `bookstore.com/authors/author54/${data.book}`,
//           (err, data) => {
//             if (err) {
//               console.log(err);
//             } else {
//               callbachFetch(
//                 `bookstore.com/authors/author54/books/book${data.id}`,
//                 (err, data) => {
//                   if (err) {
//                     console.log(err);
//                   } else {
//                     callbachFetch(
//                       `bookstore.com/authors/author54/books/book5643/${data.page}`,
//                       (err, data) => {
//                         if (err) {
//                           console.log(err);
//                         } else {
//                           console.log(data);
//                         }
//                       }
//                     );
//                   }
//                 }
//               );
//             }
//           }
//         );
//       }
//     });
//   }
// });

// promiseFetch('bookstore.com/authors')
// 	.then((data) => {
// 		promiseFetch(`bookstore.com/authors${data.id}`)
// 			.then((data) => {
// 				promiseFetch(`bookstore.com/authors/author54/${data.book}`)
// 					.then((data) => {

// 					})
// 			})
// 	})

// promiseFetch("bookstore.com/authors")
//   .then((data) => {
//     return promiseFetch(`bookstore.com/authors${data.id}`);
//   })
//   .then((data) => {
//     return promiseFetch(`bookstore.com/authors/author54/${data.book}`);
//   })
//   .then((data) => {
//     return promiseFetch(`bookstore.com/authors/author54/books/book${data.id}`);
//   })
//   .then((data) => {
//     return promiseFetch(
//       `bookstore.com/authors/author54/books/book5643/${data.page}`
//     );
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function Promise(cb){
// 	const resolve = (data) => {
// 		return {
// 			status: 'fulfilled',
// 			result: data
// 		}
// 	}
// 	const reject = (err) => {
// 		return {
// 			status: 'rejected',
// 			result: err
// 		}
// 	}

// 	cb(resolve, reject)
// }

// const promise = new Promise(res, rej)
// console.log("start");

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     // res();
//     rej();
//   }, 2000);
// });

// console.log(promise);

// console.log("end");

// const promiseFetch = (url) => {
// 	return new Promise((res, rej) => {
// 		fetch(url, (err, data) => {
// 			if(err) {
// 				rej(err)
// 			} else {
// 				res(data)
// 			}
// 		})
// 	})
// }

// const promiseFetch = (url) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // rej("some err from server");
//       res("Some data from server");
//     }, 1000);
//   });
// };

// promiseFetch("dfsdxf").then(
//   (response) => {
//     console.log("Then: ", response);
//   },
//   (err) => {
//     console.log("Catch from Then: ", err);
//   }
// );

// promiseFetch("dfsdxf")
//   .then((data) => {
//     console.log("Then: ", data);
//   })
//   .catch((err) => {
//     console.log("catch: ", err);
//   });

// promiseFetch("google.com")
//   .then((data) => {
//     console.log("Then1: ", data);
//     // return promiseFetch("yahoo.com");
//   })
//   .then((data) => {
//     console.log("Then2: ", data);
//     // return d;
//     throw new Error("SOME ERROR");
//   })
//   .then((data) => {
//     console.log("Then3: ", data);
//   })
//   .then((data) => {
//     console.log("Then4: ", data);
//   })
//   .catch((err) => {
//     console.log("Catch1: ", err);
//     // throw new Error("SOME ERROR");
//     return 20;
//   })
//   .then((data) => {
//     console.log("Then5: ", data);
//     return 50;
//   })
//   .catch((err) => {
//     console.log("Catch2: ", err);
//   })
//   .finally((something) => {
//     console.log("finally: ", something);
//     // return 60;
//     throw new Error("SOME ERROR");
//   })
//   .then((data) => {
//     console.log("Then6: ", data);
//   })
//   .catch((err) => {
//     console.log("Catch3: ", err);
//   });

// promise.finally(() => {
//   console.log("finally");
// });

// import axios from "axios";

// axios
//   .get("google.com")
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Пример использования:

// function delay(ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//     }, ms);
//   });
// }

// delay(1000).then(() => console.log("Hello!"));

const promiseFetch = (url) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("reject1");
      // res("Some data from server");
    }, 1000);
  });
};

promiseFetch
  .catch((t) => t + "catch1")
  .catch((t) => t + "catch2")
  .then((t) => t + "then1")
  .finally((t) => t + "finally")
  .then((t) => console.log(t));

const delay = (ms) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, ms);
  });

delay(1000).then(() => {
  console.log("Hello!");
});
