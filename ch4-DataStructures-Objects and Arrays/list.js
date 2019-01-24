
//create a function that takes an array and outputs a list
function arrayToList(array) {
    let list = null;
    for( let i=array.length-1; i>=0; i--){
        list = 
            { 
                value: array[i],
                rest: list
            }
    }
    return list;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

//listToArray takes in a list and outputs an array

function listToArray(list) {
    let array = [];
    for( let node = list; node; node = node.rest ) {
        array.push(node.value);
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function prepend(value, list){
    return { value, rest: list};
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}


// nth takes in a list and an index (n) and returns the value of the given index

function nth(list, n) {
    if (!list) return undefined;
    else if (n===0) return list.value;
    else return nth(list.rest, n-1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));

