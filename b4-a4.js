// Problem-1 Solution
function radianToDegree(radian) {
    // checking if given input is a number or not
    if (typeof radian === 'number') {
        // calculating 1 radian to exact degree using Math.PI value
        const oneRadianToDegree = 180 / Math.PI;
        // calculating given radian to degree using 1 radian to exact degree value
        const degree = radian * oneRadianToDegree;
        // fixing the value to exactly 2 fraction point (as sample outputs all are to two fraction point)
        const degreeToFixedTwoFractionPoint = degree.toFixed(2);
        // converting the two fraction value to float as toFixed gives us the result as string
        const degreeInFloat = parseFloat(degreeToFixedTwoFractionPoint);
        // returning the result after calculation
        return degreeInFloat;
    }
    // when if condition is false, returning an error messege as input is not valid
    return 'Plese enter radian value in number (integer or float) format.';
}
// Problem-2 Solution
function isJavaScriptFile(fileName) {
    // checking if the input is a string or not
    if (typeof fileName === 'string') {
        // all JavaScript file extention is '.js'. So checking if the file name ends with '.js'
        const isJavaScriptFileCheck = fileName.endsWith('.js');
        // returning the result as endsWith returns boolean value
        return isJavaScriptFileCheck;
    }
    // when if condition is false, returning an error messege as input is not valid
    return 'Please enter your file name in string format only.';
}
// Problem-3 Solution
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    // checking if the inputs are valid type or not
    if (typeof dieselQuantity === 'number' && typeof petrolQuantity === 'number' && typeof octaneQuantity === 'number') {
        // assigning per liter cost to variables
        const perLiterDieselPrice = 114;
        const perLiterPetrolPrice = 130;
        const perLiterOctanePrice = 135;
        // calculating individual oil total cost
        const totalDieselPrice = perLiterDieselPrice * dieselQuantity;
        const totalPetrolPrice = perLiterPetrolPrice * petrolQuantity;
        const totalOctanePrice = perLiterOctanePrice * octaneQuantity;
        // calculating the total cost for all types of oil
        const totalCost = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
        // returing the total cost after calculation
        return totalCost;
    }
    // when if condition is false, returning an error messege as input is not valid
    return 'Please input your oil quantity in number (integer or float) format only.';
}
// Problem-4 Solution
function publicBusFare(totalPassenger) {
    // checking if the input is a number and an integer number or not
    if (typeof totalPassenger === 'number' && Number.isInteger(totalPassenger)) {
        // value assigning of fixed amout to variables
        const perBusCapacity = 50;
        const perMicroCapacity = 11;
        const perPassengerPublicBusFare = 250;
        // considering total passenger as remaining passenger to perform loop properly
        let remainingPassenger = totalPassenger;
        // initially asigning 0 value to changable variable
        let publicBusTotalFare = 0;
        // checking remaining passenger everytime while loop
        while (remainingPassenger > 0) {
            // checking if remaining passenger is grater than bus capacity or not.
            if (remainingPassenger >= perBusCapacity) {
                // if grater than bus capacity, calculating the remaining passenger after sending full bus passengers
                remainingPassenger = totalPassenger % perBusCapacity;
            }
            // checking if remaining passenger is grater than micro capacity or not.
            else if (remainingPassenger >= perMicroCapacity) {
                // if grater than micro capacity, calculating the remaining passenger after sending full micro passengers
                remainingPassenger = remainingPassenger % perMicroCapacity;
            }
            // if the remaining passenger is lower than bus or micro capacity, else condition will execute
            else {
                publicBusTotalFare = remainingPassenger * perPassengerPublicBusFare;
                break;
            }
        }
        // returning total bus fair as result
        return publicBusTotalFare;
    }
    // when if condition is false, returning an error messege as input is not valid
    return 'Please input a number (integer) only';
}
// Problem-5 Solution
function isBestFriend(friend1, friend2) {
    // checking if the inputs are object and not an array or not
    if ((typeof friend1 === 'object' && typeof friend2 === 'object') && (Array.isArray(friend1) === false && Array.isArray(friend2) === false)) {
        // checking if the both objects have atlease 'name' and 'friend' property or not
        if ((friend1.name !== undefined && friend1.friend !== undefined) && (friend2.name !== undefined && friend2.friend !== undefined)) {
            // checking main conditions asked in the question
            if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
                // returing true if main condition is true
                return true;
            }
            // returing false if main condition is false
            return false;
        }
        // returning an error messege if both objects do not have atleast 'name' and 'friend' property
        return 'Please enter objects with minimum "name" and "friend" property';
    }
    // returning an error messege if both inputs are not an object type
    return 'Please enter objects only';
}