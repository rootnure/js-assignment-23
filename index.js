function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'Please provide a number';
    }
    const cube = number * number * number;
    return cube;
}

console.log(cubeNumber('5'));