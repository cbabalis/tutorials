/* But this implementation has one important problem:
in typical JavaScript implementations, it’s about 10 times slower than
the looping version.
Running through a simple loop is a lot cheaper than calling a function multiple times.
*/

function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(2, 3));


/*************************************************************************/
function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") ||
                   find(start + 3, "(" + history + " + 3)");
    }
    return find(1, "1");
}

console.log(findSolution(48));
