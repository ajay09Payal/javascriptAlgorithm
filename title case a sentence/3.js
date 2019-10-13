// 3rd method (first advanced solution)

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

console.log(titleCase('How to learn algorithm in javascript'));