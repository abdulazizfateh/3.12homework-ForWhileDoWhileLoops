// // TASK 1
// let data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
// function openOrSenior(data) {
//     let output = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i][0] >= 55 && data[i][1] > 7) {
//             output.push("Senior");
//         } else {
//             output.push("Open");
//         }
//     }
//     return output;
// }

// console.log(openOrSenior(data));



// // TASK 2
// function XO(str) {
//     let x = 0;
//     let y = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "X" || str[i] === "x") {
//             x++;
//         }
//         if (str[i] === "O" || str[i] === "o") {
//             y++;
//         }
//     }
//     return x === y ? true : false;
// }
// console.log(XO("xxoo"));




// // TASK 3
// function isTriangle(a, b, c) {
//     return a + b > c && a + c > b && b + c > a ? true : false;
// }
// console.log(isTriangle(0, 4, 6));




// // TASK 4
// const summation = function (num) {
//     let i = 1;
//     let sum = 0;
//     while (i <= num) {
//         sum += i;
//         i++
//     }
//     return sum;
// }
// console.log(summation(5));




// // TASK 5
// function findNextSquare(sq) {
//     let root = Math.sqrt(sq);
//     if (Math.round(root) === root) {
//         return Math.pow(root + 1, 2);
//     } else {
//         return -1;
//     }
// }
// console.log(findNextSquare(121));




// // TASK 6
// function filter_list(l) {
//     let filteredList = [];
//     for (let i = 0; i < l.length; i++) {
//         if (typeof l[i] === "number") {
//             filteredList.push(l[i]);
//         }
//     }
//     console.log(filteredList);

// }
// filter_list([1, 2, 'a', 'b', 2, 3, 4, 5, "b", "4", 5]);




// // TASK 7
// function squareDigits(num) {
//     let strNum = String(num);
//     let i = 0;
//     let strSquared = "";
//     while (i < strNum.length) {
//         let squared = Math.pow(strNum[i], 2);
//         strSquared += squared;
//         i++;
//     }
//     return Number(strSquared);
// }
// console.log(squareDigits(9244));




// // TASK 8
// function betterThanAverage(classPoints, yourPoints) {
//     let sum = 0;
//     let average = 0;
//     let i = 0;
//     while (i < classPoints.length) {
//         sum += classPoints[i];
//         average = sum / classPoints.length
//         i++
//     }
//     return average < yourPoints ? true : false;
// }
// console.log(betterThanAverage([90, 78, 99, 80, 69, 80, 85, 90], 100));




// // TASK 9
// function oddOrEven(array) {
//     let i = 0;
//     let sum = 0;
//     while (i < array.length) {
//         sum += array[i];
//         i++;
//     }
//     if (sum % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// console.log(oddOrEven([]));




// // TASK 10
// function reverseWords(str) {
//     let word = "";
//     let reversedStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             word = str[i] + word;
//         } else {
//             reversedStr += word + " ";
//             word = "";
//         }
//     }
//     reversedStr += word;
//     return reversedStr;
// }
// console.log(reverseWords("This is an example!"));




// // TASK 11
// function dnaStrand(dna) {
//     let dnaComplement = "";
//     for (let i = 0; i < dna.length; i++) {
//         if (dna[i] === "A") {
//             dnaComplement += "T";
//         }
//         else if (dna[i] === "T") {
//             dnaComplement += "A";
//         }
//         else if (dna[i] === "C") {
//             dnaComplement += "G";
//         }
//         else if (dna[i] === "G") {
//             dnaComplement += "C";
//         } else {
//             dnaComplement += dna[i];
//         }
//     }
//     return dnaComplement;
// }
// console.log(dnaStrand("ATCGdd"));




// // TASK 12.1
// function getCount(str) {
//     let i = 0;
//     let vowels = 0;
//     while (i < str.length) {
//         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//             vowels++;
//         }
//         i++;
//     }
//     return vowels;
// }
// console.log(getCount("fateh"));


// // TASK 12.2
// function getCount(str) {
//     var vowelsCount = 0;
//     var vowels = ["a", "e", "i", "o", "u"];
//     for (var i = 0; i < str.length; i++) {
//         for (var j = 0; j < vowels.length; j++) {
//             if (str[i] === vowels[j]) {
//                 vowelsCount++;
//             }
//         }
//     }
//     return vowelsCount;
// }
// console.log(getCount("fateh"));