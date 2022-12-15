const available = [{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":8},{"id":9},{"id":10}]

let availableArray = []

for (let i = 0; i < available.length; i++) {
    availableArray.push(available[i].id)
} 

// const getRandomRiddle = (arr) => {        
//     const randomPick = arr[Math.floor(Math.random() * arr.length)]
//     const randomRiddle = arr.splice(arr.indexOf(randomPick),1)
//     return [randomRiddle, arr]
// }



const getRandomRiddle = (arr) => {        
    const randomPick = arr[Math.floor(Math.random() * arr.length)]
    const randomRiddle = arr.splice(arr.indexOf(randomPick),1)
    return [randomRiddle, arr]
}


