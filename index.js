// Add your functions here

function map(arr, fn) {
    return arr.map(x => fn(x));
}

function reduce(arr, fn, start) {
    if (start === undefined) {
        return arr.reduce(fn);
    } else {
        return arr.reduce(fn, start);
    }
}