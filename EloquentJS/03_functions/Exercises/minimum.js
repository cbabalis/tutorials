function min(a, b) {
    if (a < b)
        return a;
    else if (a > b)
        return b;
    else
        console.log("They are equal");
}

console.log(min(0, 10));
console.log(min(0, -10));
