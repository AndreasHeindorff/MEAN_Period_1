// Creating the person object.
var person = {
    firstname: 'Hans',
    lastname: 'Hansen',
    age: '25',
    hobby: 'programming',
}

logObjectProperties(person);

console.log('Hobby exists = ' + person.hasOwnProperty('hobby'));

delete person.hobby;

console.log('Hobby deleted');

console.log('Hobby exists = ' + person.hasOwnProperty('hobby'));

logObjectProperties(person);

function logObjectProperties(obj) {
    for (var val in obj) {
        if (obj.hasOwnProperty(val)) {
            console.log(person[val]);
        }
    }
}