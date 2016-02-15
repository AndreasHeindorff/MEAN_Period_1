var person = {
    firstname: 'Hans',
    lastname: 'Hansen',
    age: '25',
    hobby: 'Programming',
}

function listAllProperties(o){
    var objectToInspect;
    var result = [];

    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}

delete person.hobby;

console.log(listAllProperties(person));