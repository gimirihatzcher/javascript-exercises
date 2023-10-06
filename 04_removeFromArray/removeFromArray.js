function removeFromArray(array, ...valuesToRemove) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        // Check if the current item is NOT in the valuesToRemove array
        if (!valuesToRemove.includes(item)) {
            // If it's not in valuesToRemove, add it to our new array
            newArray.push(item);
        }
    }
    return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
