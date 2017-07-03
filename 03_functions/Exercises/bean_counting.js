function countBs(string) {
    counter = 0;
    for (var c = 0; c < string.length; c++)
        if (string.charAt(c) == 'B')
            counter += 1;
    return counter;
}

console.log(countBs('BBC'))

function countChar(string, chr) {
    counter = 0;
    for (var c = 0; c < string.length; c++)
        if (string.charAt(c) == chr)
            counter += 1;
    return counter;
}

console.log(countChar("kakkerlak", "k"));
