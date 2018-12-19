//parameters of reduce are an array, a combining function, and starting point

function customReduce (array, combine, start) {
    let current = start;
    for ( let element of array ) {
        current = combine(element, current);
    }
    return current;
}

console.log(customReduce([1,2,3,4], (a,b) => a +b, 0));