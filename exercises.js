// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

// the integer dictates the amount of times the function loops

function myFunction(string, integer) {
  let stringArr = [];
  for (let i = 0; i < integer; i++) {
    stringArr = stringArr.concat(string);
  }

  return stringArr;
}

// teachers method to solve this problem
function myFunction(str, i) {
  const myArr = [];
  for (let j = 0; j < i; j++) {
    myArr.push(str);
  }
  return myArr;
}
myFunction("sunshine", 3);

//OR!

function myFunction(str, i) {
  return Array.from(
    {
      length,
      i,
    },
    function () {
      return str;
    }
  );
}
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------
// reverse method, slice method or spread;
// Put your answer below -------------------------

function myArray(array) {
  let newArray = array.slice().reverse();
  return newArray;
}

// techers method

function reverseArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }
  return result;
}

//OR

function reverseArray(arr) {
  return [...arr].reverse();
}

//OR w/ fat arrow

const reverseArray = (arr) => [...arr].reverse();

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function myFunction(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Teachers method
function removeFalsyValues(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // the double bang converts this into a true boolean value
    if (!!arr[i]) {
      // to be extra extra sure
      // if(!!arr[i] === true)
      result.push(arr[i]);
    }
  }
  return result;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------
// my attempt
const identityInfo = [
  ["name", "Charlie"],
  ["color", "brown"],
  ["age", 10],
];

function myArray(catagory, description) {
  let catagoryArr = [];
  let descriptionArr = [];
  let outPut = [];
  const catagoryInfo = identityInfo;

  for (let i = 0; i < identityInfo.length; i++) {
    if (catagoryArr == identityInfo.match(["name", "color", "age"])) {
      console.log(outPut);
      console.log(catagoryArr);
      outPut = catagoryArr.push();
    }
  }

  console.log(outPut);
  return outPut;
}

// Teachers method

const myArray = [
  ["name", "Charlie"],
  ["color", "brown"],
  ["age", 10],
];

// creating an object with the property of arr
function createObj(arr) {
  // setting result to be an emptry object
  const result = {};
  //use a for loop to go through the index of arr to match index to property.
  for (let i = 0; i < arr.length; i++) {
    //index starts at 0 and property starts at 1
    result[arr[i][0]] = arr[i][1];
  }
  return result;
}
// for of method (array table the same as above)
function createObj(arr) {
  const result = {};

  for (const index of arr) {
    result[index[0]] = index[1];
  }
  return result;
}
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// creating a function named myArr(array)
function myArr(array) {
  // creating an emptry string named nonDuplicates. All non duplicates will get pushed to this emptry array.
  const nonDuplicates = [];
  // creating a for loop to go the array
  for (let i = 0; i < array.length; i++) {
    // in an if sttement, if an item in index of array  = -1 than that gets pushed to the array. Duplicate vaues are falsy, therefore they do not get pushed to the new array
    if (array.indexOf(array[i]) === -1) {
      nonDuplicates.push(array[i]);
    }
  }

  return nonDuplicates;
}
console.log(myArr([1, 2, 3, 4, 5, 4, 3]));

// Teachers method

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Put your answer below -------------------------

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------
