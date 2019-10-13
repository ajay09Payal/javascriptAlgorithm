// 1st method (basic)

String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character.toUpperCase() + this.substr(index + character.length);
}

function titleCase(str) {
    let newTitleCase = str.split(' ');
    let updatedString = [];
    for (var st in newTitleCase) {
        updatedString[st] = newTitleCase[st].toLowerCase().replaceAt(0, newTitleCase[st].charAt(0));
    }
    return updatedString.join(' ');
}

console.log(titleCase('How to learn algorithm in javascript'));