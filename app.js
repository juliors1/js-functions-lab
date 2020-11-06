// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

// console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

let maxOfThree = function (num1, num2, num3) {
  if (num1 < num2 && num3 > num2) {
    return num3;
  } else if (num2 > num1 && num3 < num2) {
    return num2;
  } else if (num1 > num2 && num2 > num3) {
    return num1;
  }
};
// console.log(maxOfThree(500, 1000, 10));

// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  if (
    char.toLowerCase() === "a" ||
    char.toLowerCase() === "e" ||
    char.toLowerCase() === "i" ||
    char.toLowerCase() === "o" ||
    char.toLowerCase() === "u"
  ) {
    return true;
  } else {
    return false;
  }
}
// console.log(isCharAVowel("A"))
// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

let summArray = function (arr) {
  let sum = 0;

  arr.forEach(function (num) {
    sum += num;
  });

  return sum;
};
// console.log(summArray([2,4,5]))
// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

function multipleArray(arr) {
  let x = 1;

  arr.forEach(function (num) {
    x *= num;
  });

  return x;
}
// console.log(multipleArray([2,4,5]))

// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

let numArgs = function (...args) {
  return args.length;
};

// console.log(numArgs('test',true,5))

// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

function reverseString(str) {
  const arr = str.split("");
  return arr.reverse("").join("");
}
// console.log('rockstar')

// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.

let longestStringInArray = function (arr) {
  let longestStr = 0;
  arr.forEach(function(s){
  if (s.length > longestStr) longestStr = s.length;
});
return longestStr;
};
// console.log(longestStringInArray(["Hello", "World", "I", "Love", "Earth"]));

// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.

function stringsLongerThan (arr,args) {
  return arr.filter(function(s){
    return (s.length > args);
  });
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));