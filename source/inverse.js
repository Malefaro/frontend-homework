const getInterval = (array, index) => index >= 0 ? [index, array.length] : [0, array.length + index];

function inverse(array, index = 0) {
    if (!Array.isArray(array) || isNaN(+index)) {
        return null;
    }
    const [begin, end] = getInterval(array, +index);
    array.splice(begin, end - begin, ...array.slice(begin, end).reverse());
    return array;
}