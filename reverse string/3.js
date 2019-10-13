// 3rd method

function reverseString(str) {
    let newString = '';
    str.split("");
    for (i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString('string'));
console.log(reverseString('What should I reverse'));
console.log(reverseString('madam'));