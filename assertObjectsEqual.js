const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let keys in object1) {
      if (Array.isArray(object1[keys])) {
        return eqArrays(object1[keys], object2[keys]);
      } else if (object1[keys] !== object2[keys]) return false;
    }
    return true;
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const affirmativeEmoji = String.fromCodePoint(0x1F60E);
  const negativeEmoji = String.fromCodePoint(0x274C);
  const pass = `${affirmativeEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const fail = `${negativeEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  eqObjects(actual, expected) ? console.log(pass) : console.log(fail);
};


// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba)

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc)

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc)

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2)
