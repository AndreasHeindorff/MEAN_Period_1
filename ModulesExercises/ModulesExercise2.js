personFactory = (function() {

    var module = {};

    module.name;
    module.age;


    module.setAge = function(age) {
        module.age = age;
    };

    module.setName = function(name) {
        module.name = name;
    };

    module.getInfo = function() {
        return module.name +  ', ' + module.age;
    };

    return module;

}());

var person = personFactory;
person.setAge(22);
person.setName('Emil');

console.log(person.getInfo());