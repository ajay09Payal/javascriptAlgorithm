// 1st solution (basic solution)

let setOfArray = [
    [111, 222, 333, 444, 555],
    [465, 6455, 4654, 464],
    [564, 654654, 4654, 4],
    [4654, 645, 1, 65, 654],
    [4654, 6556, 654, 54654]
];

function largestNumInArray(array) {
    let result = [];
    let largestNumber;
    for (let n = 0; n < array.length; n++) {
        largestNumber = array[n][0];
        for (let subNum = 1; subNum < array[n].length; subNum++) {
            if (array[n][subNum] > largestNumber) {
                largestNumber = array[n][subNum];
            }
        }
        result[n] = largestNumber;
    }
    return result;
}

console.log(largestNumInArray(setOfArray));