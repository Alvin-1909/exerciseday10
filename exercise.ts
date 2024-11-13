// column to number

function columnToNumber(title: string): number {
  let result = 0;
  const length = title.length;

  for (let i = 0; i < length; i++) {
    const charCode = title.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result += charCode * Math.pow(26, length - 1 - i);
  }

  return result;
}

console.log(columnToNumber("AB"));

// no duplicate

const findFirstNonDuplicate = (arr: number[]) => {
  const set = new Set(arr);

  set.forEach((value) => {
    if (arr.filter((n) => n == value).length == 1) return console.log(value);
  });
};
findFirstNonDuplicate([2, 2, 1]);
findFirstNonDuplicate([4, 1, 2, 1, 2]);
findFirstNonDuplicate([1]);

// staircase

const staircase = (n: number) =>
  [...new Array(n - 1)]
    .reduce(
      (arr: number[]) => arr.concat(arr[arr.length - 1] + arr[arr.length - 2]),
      [0, 1, 1]
    )
    .slice(1)[n];

console.log("staircase", staircase(4));

// anagram

// const isAnagram = (str: string, str1: string) => {
//   str1.split("");

//   for (let i = 0; i < str.length; i++) {
//     if (str.includes(str1[i])) return true;
//   }
//   return false;
// };

// console.log(isAnagram("anagram", "car"));
const anagram = (s: string, t: string) =>
  s.split("").sort().join("") == t.split("").sort().join("");

console.log(anagram("anagram", "naragam"));
console.log(anagram("rat", "car"));

// *****
// ****
// ***
// **
// *

// *
// **
// ***
// ****
// *****

// *****
//  ****
//   ***
//    **
//     *

//     *
//    **
//   ***
//  ****
// *****

function triangle(arr: string[]): void {
  const star = arr.length;
  for (let i = 0; i < star; i++) {
    let hasil = "";
    for (let j = 0; j < star - i; j++) {
      hasil += arr[0];
    }
    console.log(hasil);
  }
}

const str = ["*", "*", "*", "*", "*"];
triangle(str);
