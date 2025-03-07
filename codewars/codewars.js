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