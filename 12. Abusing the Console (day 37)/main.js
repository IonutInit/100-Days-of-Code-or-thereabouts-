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
  
  //howManyTimes(10000, 10000, 'exponential')
  