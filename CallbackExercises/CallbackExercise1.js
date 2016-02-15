var names = ['Lars', 'Bo', 'Hans', 'Jan'];

function getShort(value) {
    if (value.length <= 3)
        return value;
}

function getUpperCase(value) {
    return value.toUpperCase();
}

var shortNames = names.filter(getShort)
var upperCaseNames = names.map(getUpperCase)

console.log(shortNames);
console.log(upperCaseNames);