// 1st method (basic)

function reverseString(str) {
  str = str.split('');
  str = str.reverse('');
  str = str.join('');

  return str;
}

console.log(reverseString('string'));
console.log(reverseString('What should I reverse'));
console.log(reverseString('madam'));