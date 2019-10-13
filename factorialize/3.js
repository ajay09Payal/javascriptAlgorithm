// 3rd solution

function factorialize(num) {
    for (var i = 1; num >= 1; num--) {
        i *= num;
    }
    return i;
}

console.log(factorialize(4));
console.log(factorialize(5));
console.log(factorialize(6));
console.log(factorialize(0));