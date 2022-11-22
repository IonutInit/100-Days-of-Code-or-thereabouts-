//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
    if(number <= 0) {
        return 0
    }

  const numberArr = [];
  for (let i = 1; i < number; i++) {
    numberArr.push(i);
  }
  const divNums = [];
 for (i of numberArr) {
    if(numberArr[i]%3 == 0 || numberArr[i]%5 == 0) {
        divNums.push(numberArr[i])
    }
 }
 //return divNums
 return divNums.reduce((a,b) => a + b, 0)
}
