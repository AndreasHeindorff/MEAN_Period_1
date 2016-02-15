var names = ['Lars', 'Bo', 'Hans', 'Jan'];

Array.prototype.myFilter = function(callback) {
    var arr = [];
    for (var i = 0, max = this.length; i < max; i++) {
        if (callback(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

Array.prototype.myMap = function(callback) {
    var arr = [];
    for (var i = 0, max = this.length; i < max; i++) {
        arr.push(callback(this[i]));
    }
    return arr;
}

function getShort(value) {
    return value.length <= 3;
}

function getUpperCase(value) {
    return value.toUpperCase();
}

console.log(names.myFilter(getShort));
console.log(names.myMap(getUpperCase));