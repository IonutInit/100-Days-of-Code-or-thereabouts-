//defines a theshold for similarity (e.g. 2 letters for a 3 letter word, 3 for 4, 4 for 6)
function threshold(a) {
    return (a < 5) ? a - 1 : a - 2;
}


//comparing similarity of unique letters is emore suitable in our case than checking for similarity in letter position
//the major drawback is that a scrambled word will return a perfect positive
//however, integrating this with a letter similarity checker may be too much
function checkSetSimilarity(input, keyword) {
    input.toLowerCase()
    if(input === keyword) {
        return 'Correct'
    }
    //creating arrays of unique letters
    const setInput = [];
    for (let i of input) {
        if(setInput.indexOf(i) == -1) {
            setInput.push(i);
        }
    }

    const setKeyword = [];
    for (let i of keyword) {
        if(setKeyword.indexOf(i) == -1) {
            setKeyword.push(i);
        }
    }

    //checking 'set' similarity
    let counter = 0;
    for (let i in setKeyword) {
        for (let j in setInput)
        if (setKeyword[i] == setInput[j]) {
            counter++
        }
    }

    //also setting limits for the length of the input set (otherwise we might get positives for 'egdgdrety' and 'egg')    
    const dif = keyword.length - threshold(keyword.length);
    let lengthOK = false;
    if (setInput.length + dif >= threshold(setKeyword.length) && setInput.length - dif <= threshold(setKeyword.length)) {
        lengthOK = true;
    }  
    
    if (counter >= threshold(keyword.length) && lengthOK == true) {
        return 'Getting there...';
    } else {
        return false
    }
}


// //model of checking for letter simlarity
// function checkLetterSimilarity(input, keyword) {
//     input = input.split('');
//     keyword = keyword.split('');
//     let counter1 = 0;
//     let counter2 = 0;
//     (input.length > keyword.length) ? large = input.length : large = keyword.length;
//     (input.length < keyword.length) ? small = input.length : small = keyword.length;
//     let dif = large - small;    
    
//     //checks for similarities from left to right
//     for (i = 0; i < large; i++) {
//         if (input[i] == keyword[i]) {
//             counter1++;
//         }
//     }
    
//     //pushes x's in front of shortest word so it can check for similarities from right to left
//     for(i = 0; i < dif; i++){
//         if(input.length < keyword.length){
//             input.unshift('x');
//         } else {
//             keyword.unshift('x');
//         }
//     }

//     //checks for similarities from right to left
//     for(i = large; i > 0; i--) {
//         if(input[i] == keyword[i]) {
//             counter2++;
//         }
//     }    
// }




function checkSynonimSimilarity(input, synonyms) {
    for (let synonym in synonyms) {
        if (checkSetSimilarity(input, synonyms[synonym])) {
            return true;
        }
    }
}

console.log(checkSetSimilarity('', 'vent'))

console.log(checkSynonimSimilarity('vent', ['volcano', 'vent']))