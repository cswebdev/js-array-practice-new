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

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function myArray(catagory, description) {
  const identityInfo = {
    name: "Charlie",
    color: "brown",
    age: 10,
  };

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
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

function myArr(array) {
  const nonDuplicates = [];

  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === i) {
      nonDuplicates.push(array[i]);
    }
  }

  return nonDuplicates;

  console.log(myArr([1, 2, 3, 4, 5, 4, 3]));
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
