function createPerson(firstname, lastname, age) {
    return {
        firstname : firstname,
        lastname : lastname,
        age : age,
        getProperty : function(prop) {
            return this[prop];
        }
    }
}

var user = createPerson('Lars', 'Larsen', 25);
console.log(user.getProperty('firstname'));