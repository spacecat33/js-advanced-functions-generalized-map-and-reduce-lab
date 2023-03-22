// Add your functions here

function map(array, fn) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let result = fn(array[i])
        newArray.push(result)
    };
    return newArray;
};

function reduce(array, fn, startingPoint) {
    let newValue = (!!startingPoint) ? startingPoint : array[0];
    let i = (!!startingPoint) ? 0 : 1
    for (; i < array.length; i++) {
        newValue = fn(array[i], newValue)
    };
    return newValue;
}