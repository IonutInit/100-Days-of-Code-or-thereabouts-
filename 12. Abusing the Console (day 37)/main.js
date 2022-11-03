function wordScrambler(word) {
    let letterArr = word.split("");
    for (let i = letterArr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      // [letterArr[i], letterArr[j]] = [letterArr[j], letterArr[i]]
      let temp = letterArr[i];
      letterArr[i] = letterArr[j]
      letterArr[j] = temp
    }
    scrambled = letterArr.join('')
    //console.log(scrambled)
    return scrambled
  }
  
  
  // wordScrambler("hello")
  
  // function whatAreTheChances(times, word) {
  //     let counter = 0;
  //     for (let i = 0; i < times; i++) {
  //         let scrambled = wordScrambler(word);
  //         if (scrambled == word) {
  //             counter++
  //         }
  //     }
  //     console.log(word)
  //     console.log(counter)
  // }
  
  function whatAreTheChances(times, word) {
      let results = [];
      for (let i = 0; i < times; i++) {
          results.push(wordScrambler(word))
      }
      console.log(results)
      results = results.filter(results => results == word)
      //console.log(results.length)
      return results.length
  }
  
  
  //wordScrambler('hello')
  
  //whatAreTheChances(1000, 'hello');
  
  //console.log(whatAreTheChances(1000, 'hello'))
  
  
  function howManyTimes(times, iterate, word) {
      let results = [];
      let counter = 0;
      for (let i = 0; i < times; i++) {
          results.push(whatAreTheChances(iterate, word));
          counter++
          console.log(counter)
      } 
      let Max = Math.max(...results);
      let Min = Math.min(...results)
      console.log(Max)
      console.log(Min)
      //return outcome
  }
  
  //howManyTimes(100, 100, 'exponential')
  

let arr = ['hello0', 'hello1']


function averageLetter(word) {    
    word =word.replace(/ /g, "").toLowerCase() 
    let letters = ['a', 'b', 'c', 'd', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
'v', 'w', 'x', 'y', 'z'];
    let value = 0;
    for (let i = 0; i<word.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            if (word[i] == letters[j]) {
                value += letters.indexOf(letters[j]);
            }
            
        }
       
    }
    value += word.length;
    const index = Math.round(value / word.length);
    return letters[index - 1].toUpperCase()
}

console.log(averageLetter('Aaron Abdiqani Adie Aizyadi Alex Alia Amina Amina Amina Andres Andrew Anthony Arooj Ash-lee Ashraf Barbara Beatrice Bella Ben Ben Benjamin Calla Callum Cameron Camilla Celia Charles Chetan Chris Colin Constantin Craig Cristhyan Curt Damian Daniel Dayo Dhanveer Dionne Elliot Elspeth Emilia Emily Esosa Evgenii fabbi Fardoso Faseeh Federica Felicity Fenton Filip Flavia Francesca Francesco Gabriel Gabriel Greg Hicham Ikram Ilwad Iona Iona Ionut Isaac Isabelle Jack James Jason Jason Jay Jeremy Joe Joseph julio Julio Jyotshna Keira Kiane Krishan Kylie Lani Lewis Lewis Louis Lucy Luke Manel Marcel Martha Marwa Matthew Mike Mikolaj Mohamed Muhammed Mukti Natasha Nathan Nicholas Nick Oliver Omar Peter Rachel Rhona Robin Roman Ryan Ryan Sebastian Shane Sophie Stefan Stephanie Stephanie Steve Steven Susanna Tariq Taylor Tendai Tirso Tom Victoria Violeta William Yahya'))

//console.log(averageLetter('Ionut'))






function mostCommon(word) {
    word =word.replace(/ /g, "").toLowerCase()
    let letters = [
        {letter: 'a'}, {letter: 'b'}, {letter: 'c'}, {letter: 'd'}, {letter: 'e'},
        {letter: 'f'}, {letter: 'g'}, {letter: 'h'}, {letter: 'i'}, {letter: 'j'},
        {letter: 'k'}, {letter: 'l'}, {letter: 'm'}, {letter: 'n'}, {letter: 'o'},
        {letter: 'p'}, {letter: 'q'}, {letter: 'r'}, {letter: 's'}, {letter: 't'},
        {letter: 'u'}, {letter: 'v'}, {letter: 'w'}, {letter: 'x'}, {letter: 'y'},
        {letter: 'z'},
    ];
    
    for (i in letters) {
        letters[i].count = 0;
    }

    for (i in letters) {
        for (j in word) {
            if(letters[i].letter == word[j]) {
                letters[i].count++
            }
        }
    }

    letters = letters.filter(letters => letters.count > 0);

   return letters
}


//console.log(mostCommon('Aaron Abdiqani Adie Aizyadi Alex Alia Amina Amina Amina Andres Andrew Anthony Arooj Ash-lee Ashraf Barbara Beatrice Bella Ben Ben Benjamin Calla Callum Cameron Camilla Celia Charles Chetan Chris Colin Constantin Craig Cristhyan Curt Damian Daniel Dayo Dhanveer Dionne Elliot Elspeth Emilia Emily Esosa Evgenii fabbi Fardoso Faseeh Federica Felicity Fenton Filip Flavia Francesca Francesco Gabriel Gabriel Greg Hicham Ikram Ilwad Iona Iona Ionut Isaac Isabelle Jack James Jason Jason Jay Jeremy Joe Joseph julio Julio Jyotshna Keira Kiane Krishan Kylie Lani Lewis Lewis Louis Lucy Luke Manel Marcel Martha Marwa Matthew Mike Mikolaj Mohamed Muhammed Mukti Natasha Nathan Nicholas Nick Oliver Omar Peter Rachel Rhona Robin Roman Ryan Ryan Sebastian Shane Sophie Stefan Stephanie Stephanie Steve Steven Susanna Tariq Taylor Tendai Tirso Tom Victoria Violeta William Yahya'))