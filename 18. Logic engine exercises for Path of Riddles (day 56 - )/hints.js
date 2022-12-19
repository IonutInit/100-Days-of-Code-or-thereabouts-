//defines a theshold for similarity (e.g. 2 letters for a 3 letter word, 3 for 4, 4 for 6)
function threshold(a) {
    return (a < 5) ? a - 1 : a - 2;
}





const averageLetter = (word, averageLetterCount) => {
    averageLetterCount = averageLetterCount + 1;
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const arr = []
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            if(word[i] === letters[j]) {
                arr.push(letters.indexOf(letters[j]) + 1)
            }
        }
    }
    const averageIndex = Math.round((arr.reduce((a, b) => a + b) - arr.length) / arr.length)
    const averageLetter = letters[averageIndex].toUpperCase()
    
    return `The average letter is ${averageLetter}.`
}

// console.log(averageLetter('irina'))

const approximateLength = (word) => {
    const dif = word.length - threshold(word.length)
    return `The solution is between ${word.length - dif} and ${word.length+dif} letters long.`
}

// console.log(approximateLength('hello'))

const randomLetter = (word) => {
    const rand = Math.floor(Math.random() * word.length)
    return `One of the letters is ${word[rand].toUpperCase()}.`
}

// console.log(randomLetter('hello'))

const synonym = (synonymsString) => {
    const synonyms = synonymsString.split(',')
    const rand = Math.floor(Math.random() * synonyms.length)
    return `Another word for it might be ${synonyms[rand]}.`
}

// // console.log(synonym(['hello', 'this', 'that']))


// //the array of available 
// const hints = [averageLetter, approximateLength, randomLetter, synonym]

// //array expressing the chances that each of the hints may appear
// //in getHint one of these elements will be chosen at random then passed as the index of the 'hints' array of functions
// const hintPool = [0, 0, 1, 1, 2, 3]

// const getHint = (word) => {
//     const hint = hintPool[Math.floor(Math.random() * hintPool.length)]
//     console.log(hint)
//     return hints[hintPool[hint]](word)
// }

// // console.log(getHint('hello'))




// const arraySplicer = (element, array) => {
//     const remove = array.splice(element, 1)
//     return array
// }

// console.log(arraySplicer(1, hints))

// const possbileHints = [averageLetter, approximateLength, randomLetter, synonym]

// const hintOptions = [0, 0, 1, 1, 2, 3]

// const randNum = Math.floor(Math.random() * hintOptions.length)



// console.log(possbileHints[hintOptions[randNum]]("welcome"))



let possibleHintsCounter = [0, 0, 0, 0]

const getHint = (input) => {
  
    const possbileHints = [averageLetter, approximateLength, randomLetter, synonym]
    
    let hintOptions = [0, 0, 1, 1, 2, 3]
    const randNum = Math.floor(Math.random() * hintOptions.length)
    
   

    if (possibleHintsCounter[0] > 0) {
        hintOptions = hintOptions.filter(x => x !== 0)
    }

    if (possibleHintsCounter[1] > 0) {
        hintOptions = hintOptions.filter(x => x !== 1)
    }

    // if (possibleHintsCounter[2] > 3) {
    //     hintOptions = hintOptions.filter(x => x !== 2)
    // }

    // if (possibleHintsCounter[3] > 3) {
    //     hintOptions = hintOptions.filter(x => x !== 3)
    // }

    console.log(possibleHintsCounter)
    console.log(hintOptions)
    return(possbileHints[hintOptions[randNum]](input))
}

console.log(getHint('welcome'))
console.log(getHint('welcome'))
console.log(getHint('welcome'))
// console.log(getHint('welcome'))
// console.log(getHint('welcome'))