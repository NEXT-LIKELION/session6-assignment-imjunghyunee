const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers);

const squaredNumbers = evenNumbers.map(function (num) {
    return num * num;
});
console.log(squaredNumbers);

const total = squaredNumbers.reduce(function (sum, current) {
    return sum + current;
}, 0);
console.log(total);
