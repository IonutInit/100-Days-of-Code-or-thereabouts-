//https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin===true) {
      sharkSpeed=(sharkSpeed/2);
    }
    let sharkTime = (sharkDistance / sharkSpeed);
    let youTime = (pontoonDistance / youSpeed);
    if (sharkTime>youTime) {
      return "Alive!";
    } else if (sharkTime<youTime) {
      return "Shark Bait!";
    }
  }


//https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {
    let firstLetterBeast = beast.charAt(0);
     let lastLetterBeast = beast.charAt(beast.length-1);
     let firstLetterDish = dish.charAt(0);
     let lastLetterDish = dish.charAt(dish.length-1);
     if (firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish) {
       return true
     } else {return false};
   }



//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s){
    let s = "one two three cv seventy"
    let myArr = s.split(" ")
    let arrLength = [];
    for (i = 0; i < myArr.length; i++) {
        arrLength.push(myArr[i].length);
    }
    let minVal = Math.min.apply(null, arrLength);
    let searchIndex = arrLength.indexOf(minVal)
    let word = myArr[searchIndex]
}



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
//console.log(manyTimes(100000, 6))





//Made by a colleague, unfortunately can't remember who
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

//console.log(FizzBuzzifier([1,2,3,4,5,6,7,8,13,12,15]))



//https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript

function solution(number){
    if(number < 0) {
      return 0
    }
    
    let numArr = [];
    let finalNum = [];
    let value = 0;
    for (i = number - 1; i > 0; i--) {
      numArr.push(i)
    }
    
    for (i = 0; i<numArr.length; i++) {
      if (numArr[i] % 3 == 0 || numArr[i] % 5 == 0) {
        finalNum.push(numArr[i])
      }
    }
    
    for (i of finalNum) {
      value += i
    }
    return value
  }


//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
    str = str.toLowerCase()
    const arr = str.split('');
    const set = new Set(arr);  
    const hasDuplicates = set.size < arr.length;
    return !hasDuplicates
  }
  
  //console.log(isIsogram('moOse'))
 
  

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str){
    let arr = []
    if(str == '') {
      return arr;
    } else {
       if(str.length % 2 != 0) {
      str = str + '_'
    }
     arr = str.split('');
     for (i = 0; i < str.length * 2; i+=3) {
      arr.splice(i, 0, " ")
     }
     arr = arr.join('').trim();
     arr = arr.split(' ');
     return arr
    }   
  }
  
  
  
//https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
  
  
function score(dice) {
    let slots = [0, 0, 0, 0, 0, 0, 0];
    let score = 0;
    
    for(i = 0; i < slots.length; i++) {
      for(j = 0; j < dice.length; j++) {
        if(dice[j] == i) {
          slots[i]++
        }
      }
    }
    slots.shift()
      for (i = 1; i < slots.length; i++) {
      if (slots[i] >= 3) {
        score += (i + 1) * 100 
      }
    }
  
   if(slots[0] >= 3) {
      score += 1000
    } 
  
    if(slots[0] <= 2) {
      score += slots[0] * 100
    } else if((slots[0] >= 4)) {
      score += (slots[0] - 3) * 100
    }
  
    if(slots[4] <= 2) {
      score += slots[4] * 50
    } else if (slots[4] >= 4) {
      score += (slots[4] - 3) * 50
    }
  
    return score
    // console.log(slots)
    // console.log(score)
  }
  
  
//console.log(score([4, 4, 4, 3, 3]))
