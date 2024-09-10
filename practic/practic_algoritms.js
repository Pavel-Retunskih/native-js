let arr = [1, 4, 2, 5, 3, 7, 9, 6, 8, 100, 200];
let arr1 = [4, 2, 3, 7, 6, 8, 201, 300];

function getInt(firstArray, secondArray) {
  return firstArray.reduce((acc, item) => {
    if (!secondArray.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

console.log(getInt(arr, arr1));

// сортировка вставками
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Сдвигаем элементы arr[0..i-1], которые больше key, на одну позицию вперед
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Пример использования
const arr3 = [12, 11, 13, 5, 6];
const sortedArr = insertionSort(arr3);
console.log("Отсортированный вставками массив:", sortedArr);

// сортировка слиянием

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Разделение массива на две части
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Рекурсивная сортировка каждой части
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Слияние отсортированных частей
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  // Слияние двух отсортированных массивов
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Копирование оставшихся элементов, если они есть
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Пример использования
const arr4 = [38, 27, 43, 3, 9, 82, 10];
const sortedArr1 = mergeSort(arr);
console.log("Отсортированный слиянием массив:", sortedArr);
