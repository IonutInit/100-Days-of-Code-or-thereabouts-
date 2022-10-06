//VARIOUS EXERCISES DONE IN THE LAST FEW DAYS, MOSTLY FROM FREECODECAMP (FREEcODEcAMP?)

// //COUNTING CARDS - FCC --> line 8
// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   let instruction = "";
//   //if (card == 2 || card == 3 || card == 4 || card == 5, card == 6) {
//     // ? the above works only for 6
//     if (card > 1 && card < 7) {
//     count++;
//   } else if (card > 6 && card < 10) {
//   }  
//   else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
//     count--;
//   }
//   if (count > 0) {
//     instruction = " Bet";
//   } else {
//     instruction = " Hold"
//   }
//   return count + instruction;
//   // Only change code above this line
// }



// //UPDATE ALBUMS - FCC --> line 70
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // // Only change code below this line
// // function updateRecords(records, id, prop, value) {
// //   if (prop == "artist") {
// //     records[id].artist = value;
// //   } else if (prop == "albumTitle") {
// //     records[id].albumTitle = value;
// //   } else if (prop == "tracks") {
// //     records[id].tracks = [];
// //     records[id].tracks.push(value);
// //   }
// //   return records;
// // }

// function updateRecords(records, id, prop, value) {
//   if (value != "") {
//     if (prop != "tracks") {
//     records[id][prop] = value;
//   } else if (prop == "tracks") {
//     if (!records[id].hasOwnProperty(prop)) {
//       records[id].tracks = [];
//     }
//     records[id].tracks.push(value);
//   } else {
//     delete records[id].prop; //does not truly delete, but turns into undefined
//   }
//   }
//   return records;
// }

// updateRecords(recordCollection, 2468, 'artist');
  
// // recordCollection[5439].artist = "ABBA"
// delete recordCollection[2468].artist //--> this one works




// 2 STEPS AT A TIME
// const myArray = [];

// // Only change code below this line
// for (let i = 1; i < 10; i += 2) {
//   myArray.push(i)
// }

// console.log(myArray)



//ADDING ALL ELEMENTS OF AN ARRAY
// // Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i]
// }


// //LOOPING IN NESTED ARRAYS
// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j]
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);




// //DO LOOP
// // Setup
// const myArray = [];
// let i = 10;

// // // Only change code below this line
// // while (i < 5) {
// //   myArray.push(i);
// //   i++;
// // }

// do {
//   myArray.push(i);
//   i++;
// } while (i < 10);






// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name) {
//   let myArr = [];
//   for (let i = 0; i < contacts.length; i++) {
//     for (let j = 0; j < contacts[i].length; j++) {
//     }
//     myArr = contacts[i][j].push(contacts[i][j]);
//   }
// }

// //lookUpProfile("Akira");


// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
  
//   const failureItems = [];
  
//   for (i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
//   }

//   return failureItems;
// }

// const failuresList = makeList(result.failure);