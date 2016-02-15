var names = ['Lars', 'Bo', 'Hans', 'Jan'];

function myFilter(array, callback){
    var arr = [];
    for (var i = 0, max = array.length; i < max; i++){
        if(callback(array[i])){
            arr.push(array[i]);
        }
    }
    return arr;
}

function myMap(array, callback){
    var arr = [];
    for (var i = 0, max = array.length; i < max; i++){
        arr.push(callback(array[i]));
    }
    return arr;
}

function getShort(value) {
    if (value.length <= 3)
        return value;
}

function getUpperCase(value) {
    return value.toUpperCase();
}

console.log(myFilter(names, getShort));
console.log(myMap(names, getUpperCase));