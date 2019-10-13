// Intermediate solution

function findLongestWord(str){
  return str.split(' ').reduce(function(x, y) {
    return Math.max(x, y.length);
  }, 0);
}


  console.log(findLongestWord('here I am'));
  console.log(findLongestWord('Ajay this side longest word sampless'));