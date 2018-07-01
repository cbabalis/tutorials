function isEven(x) {
    if ((x - 2) > 1)
        isEven(x-2);
    return x % 2 == 0;
}

console.log(isEven(50));
console.log(isEven(75));
