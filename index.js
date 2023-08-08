function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'Please provide a number';
    }
    const cube = number * number * number;
    return cube;
}

function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Both parameter must be in string format';
    }
    if(string1.includes(string2)) {
        return true;
    }
    return false;
}



// test case

// console.log(cubeNumber("4")); // 1
console.log(matchFinder('Peter Parker','10'));