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

function sortMaker(arr) {
    if(!Array.isArray(arr)){
        return 'Please provide an array';
    }
    else if(arr.length !== 2) {
        return 'Please provide an array of two elements';
    }
    else if(typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return 'Both element must be in number format';
    }
    else if(arr[0] === arr[1]) {
        return 'equal';
    }
    else if(arr[0] <= 0 || arr[1] <= 0) {
        return 'Invalid Input';
    }
    else if(arr[1] > arr[0]) {
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
        return arr;
    }
    return arr;
}

function findAddress(obj) {
    if(Array.isArray(obj) || typeof obj !== 'object') {
        return 'Please provide an object';
    }
    const keys = Object.keys(obj);
    const address = [];
    const addressParts = ['street', 'house', 'society'];
    for(const part of addressParts) {
        if(keys.includes(part)){
            address.push(obj[part]);
            continue;
        }
        address.push('__');
    }
    const fullAddress = address.join(',');
    return fullAddress;

}

function canPay(changeArray, totalDue) {
    if(!Array.isArray(changeArray)) {
        return 'Please provide an array as first parameter';
    }
    else if(changeArray.length === 0) {
        return 'Array cannot be empty';
    }
    else if (typeof totalDue !== 'number' || totalDue <= 0) {
        return 'Please provide a positive number as second parameter';
    }
    let changeSum = 0;
    for(const change of changeArray) {
        if(typeof change !== 'number' || change < 0) {
            return 'All the values of array must be positive numbers';
        }
        changeSum += change;
    }
    if(changeSum >= totalDue) {
        return true;
    }
    return false;
}


// test case
// console.log(canPay([1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], 10)); // 5
// console.log(findAddress({street:10,society:"Earth Perfect",house:"15A"})); // 4
// console.log(sortMaker([1, 2])); // 3
// console.log(matchFinder('Peter Parker','10')); // 2
// console.log(cubeNumber("4")); // 1