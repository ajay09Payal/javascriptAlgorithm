function palindrome(str){
    let front = 0;
    let back = str.length - 1;
    
    // front and back pointer won't always meet in the middle
    while(back > front){
      while(str[front].match(/[\W_]/)){
        front ++;
        continue;
      }
      while(str[back].match(/[\W_]/)){
        back --;
        continue;
      }
      
      if(str[front].toLowerCase() != str[back].toLowerCase()){
        return false;
      }
      
      front ++;
      back --;
    }
    return true;
  }
  
  console.log(palindrome("Madam In Eden, I'm Adam "));
  console.log(palindrome("A Santa Lived As a Devil At NASA"));
  console.log(palindrome("Mr. Owl Ate My Metal Worm"));
  console.log(palindrome("Dammit, I'm Mad!"));