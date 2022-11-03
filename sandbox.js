//https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     if (dolphin===true) {
//       sharkSpeed=(sharkSpeed/2);
//     }
//     let sharkTime = (sharkDistance / sharkSpeed);
//     let youTime = (pontoonDistance / youSpeed);
//     if (sharkTime>youTime) {
//       return "Alive!";
//     } else if (sharkTime<youTime) {
//       return "Shark Bait!";
//     }
//   }


//https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

// function feast(beast, dish) {
//     let firstLetterBeast = beast.charAt(0);
//      let lastLetterBeast = beast.charAt(beast.length-1);
//      let firstLetterDish = dish.charAt(0);
//      let lastLetterDish = dish.charAt(dish.length-1);
//      if (firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish) {
//        return true
//      } else {return false};
//    }



//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// // function findShort(s){
//     let s = "one two three cv seventy"
//     let myArr = s.split(" ")
//     let arrLength = [];
//     for (i = 0; i < myArr.length; i++) {
//         arrLength.push(myArr[i].length);
//     }
//     let minVal = Math.min.apply(null, arrLength);
//     let searchIndex = arrLength.indexOf(minVal)
//     let word = myArr[searchIndex]
// // }


//https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

// let duration = 3601;
// let days = Math.floor(duration / 86400);
// let hours = Math.floor(duration / 3600);
// let minutes = Math.floor(duration / 60);
// let seconds = duration % 60;

// let daysText;
// let hoursText;
// let minutesText;
// let secondsText;

// if (days <= 0) {
//     daysText = "";
// } else {
//     daysText = `${days} days, `;
// }

// if (minutes > 59) {
//     minutesText = "";
// } else daysText = `${minutes} minues, `

// if (hours > 23) {
//     hoursText = ""
// } else {
//     hoursText = `${hours} hours, `
// }


function getChoice(num) {    
    // let ranNum1 = Math.floor(Math.random() * num);
    // let ranNum2 = Math.floor(Math.random() * num);

    // if (ranNum1 == ranNum2) {
    //     return true
    // }

    if (Math.floor(Math.random() * num) == Math.floor(Math.random() * num)) {
        return true;
    }
} 

function manyTimes(times, num) {
    let counter = 0;
    for (i = 0; i < times; i++) {
        if(getChoice(num)) {
            counter++
        }
    }
    return counter;
}
console.log(manyTimes(1000, 3))



function FizzBuzzifier(array) {
    for (i in array) {
        if (array[i]%3 == 0) {
            array[i] = 'Fizz'
        } else if(array[i]%5 == 0)
             {
            array[i] = 'Buzz' 
            }
        else if (array[i]%3 == 0 && array[i]%5 == 0) {
            array[i] = 'FizzBuzz'
        }
    }
    return array
}

// console.log(FizzBuzzifier([1,2,3,4,5,6,7,8,13,12,15]))