//3rd solution (advanced method)

let setOfArray = [
    [111, 222, 333, 444, 555],
    [465, 6455, 4654, 464],
    [564, 654654, 4654, 4],
    [4654, 645, 1, 65, 654],
    [4654, 6556, 654, 54654]
];

function largestNumInArray(array) {
    return array.map(Function.apply.bind(Math.max, null));
}

console.log(largestNumInArray(setOfArray));