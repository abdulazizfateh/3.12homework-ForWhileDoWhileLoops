// // 1. Array [2,6,3,7] ichidagi sonlarni darajasini yangi arrayga solib qaytaring -› [4,36,9,49]
// // 2. Array [5,-3,4,-6] ichidagi manfiy sonlarni ham musbat qilib yangi arrayga solib qaytaring -› [5,3,4,6]
// // 3. Array ["Sarvar", "Murod","Salim"] ichidagi har stringga "xon" qo'shimchasini qo'shib yangi arrayga solib qaytaring
// // ["Sarvarxon", "Murodxon", "Salimxon"]
// // 4. Array [true, false, true] ichidagi boolean qiymatlarni mos ravishda "Ha" va "Yoq" ko'rinishda yangi arrayda qaytaring
// // ["Ha", "Yoq", "Ha"]

// // TASK 1.1 - Using While Loop
// const toSquare = (numbers) => {
//     let squared = [];
//     let i = 0;
//     while (i < numbers.length) {
//         squared[i] = Math.pow(numbers[i], 2);
//         i++;
//     }
//     return squared;
// }
// console.log(toSquare([2, 6, 3, 7]));



// // TASK 1.2 - Using For Loop
// const toSquare = (numbers) => {
//     let squared = [];
//     for (let i = 0; i < numbers.length; i++) {
//         squared[i] = Math.pow(numbers[i], 2);
//     }
//     return squared;
// }
// console.log(toSquare([2, 6, 3, 7]));



// // TASK 1.3 - Using DO While Loop
// const toSquare = (numbers) => {
//     let squared = [];
//     let i = 0;
//     do {
//         squared[i] = Math.pow(numbers[i], 2);
//         i++;
//     } while (i < numbers.length);
//     return squared;
// }
// console.log(toSquare([2, 6, 3, 7]));







// // TASK 2.1 - Using While Loop
// const toAbsolute = (numbers) => {
//     let i = 0;
//     while (i < numbers.length) {
//         numbers[i] = Math.abs(numbers[i]);
//         i++;
//     }
//     return numbers;
// }
// console.log(toAbsolute([5, -3, 4, -6]));



// // TASK 2.2 - Using For Loop
// const toAbsolute = (numbers) => {
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = Math.abs(numbers[i]);
//     }
//     return numbers;
// }
// console.log(toAbsolute([5, -3, 4, -6]));



// // TASK 2.3 - Using Do While Loop
// const toAbsolute = (numbers) => {
//     let i = 0;
//     do {
//         numbers[i] = Math.abs(numbers[i]);
//         i++;
//     } while (i < numbers.length);

//     return numbers;
// }
// console.log(toAbsolute([5, -3, 4, -6]));







// // TASK 3.1 - Using While Loop
// const addXon = (names) => {
//     let i = 0;
//     while (i < names.length) {
//         names[i] = names[i] + "xon"
//         i++
//     }
//     return names;
// }
// console.log(addXon(["Sarvar", "Murod", "Salim"]));


// // TASK 3.2 - Using For Loop
// const addXon = (names) => {
//     for (let i = 0; i < names.length; i++) {
//         let addedXon = `${names[i]}xon`;
//         names[i] = addedXon;
//     }
//     return names;
// }
// console.log(addXon(["Sarvar", "Murod", "Salim"]));



// // TASK 3.3 - Using Do While Loop
// const addXon = (names) => {
//     let i = 0;
//     do {
//         names[i] = names[i] + `xon`;
//         i++;
//     } while (i < names.length);
//     return names;
// }
// console.log(addXon(["Sarvar", "Murod", "Salim"]));







// // TASK 4.1 - Using While Loop
// const convertToYesNo = (boolean) => {
//     let i = 0;
//     while (i < boolean.length) {
//         if (boolean[i] === true) {
//             boolean[i] = "Yes";
//         } else {
//             boolean[i] = "No"
//         }
//         i++;
//     }
//     return boolean;
// }
// console.log(convertToYesNo([true, false, true, "false", "true"]));


// // TASK 4.2 - Using For Loop
// const convertToYesNo = (boolean) => {
//     for (let i = 0; i < boolean.length; i++) {
//         boolean[i] === true ? boolean[i] = "Yes" : boolean[i] = "No";
//     }
//     return boolean;
// }
// console.log(convertToYesNo([true, false, true, "false", "true"]));



// // TASK 4.3 - Using Do While Loop
// const convertToYesNo = (boolean) => {
//     let i = 0;
//     do {
//         boolean[i] === true ? boolean[i] = "Yes" : boolean[i] = "No";
//         i++;
//     } while (i < boolean.length);
//     return boolean;
// }
// console.log(convertToYesNo([true, false, true, "false", "true"]));