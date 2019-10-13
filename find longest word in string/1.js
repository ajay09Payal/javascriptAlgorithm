// basic solution

function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    for(let i = 0; i < words.length; i++){
      if(words[i].length > maxLength){
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  
  console.log(findLongestWord('here I am'));
  console.log(findLongestWord('Ajay this side longest word sampless'));