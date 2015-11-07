function LetterCapitalize(str) {
   var newStr = []  
   var word = str.split(" "); 

    for(var i = 0; i < word.length; i++){
    
      newStr.push(word[i][0].toUpperCase() + word[i].slice(1))
    }

    return newStr.join(" "); 

  };
console.log(LetterCapitalize("hello world"));