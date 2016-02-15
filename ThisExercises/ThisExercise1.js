var person1 = {
    name : 'Hans',
    getName : function() {return 'My name is ' + this.name;}
}

var person2 = {
    name : 'Bo',
}

console.log(person1.getName());
console.log(person1.getName.call(person2));