//2nd solution (intermediate method)

let setOfArray = [
    [111, 222, 333, 444, 555],
    [465, 6455, 4654, 464],
    [564, 654654, 4654, 4],
    [4654, 645, 1, 65, 654],
    [4654, 6556, 654, 54654]
];

function largestNumInArray(array) {
    return array.map(function (group) {
        return group.reduce(function (previous, current) {
            return (current > previous) ? current : previous;
        })
    })
}

console.log(largestNumInArray(setOfArray));