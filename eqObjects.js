const assertEqual = function(actual, expected) {
  const affirmativeEmoji = String.fromCodePoint(0x1F60E);
  const negativeEmoji = String.fromCodePoint(0x274C);
  const affirmativeMessage = `${affirmativeEmoji} Assertion Passed: ${actual} === ${expected}`;
  const negativeMessage = `${negativeEmoji} Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected) ? console.log(affirmativeMessage) : console.log(negativeMessage);
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

// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true)

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false)

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false