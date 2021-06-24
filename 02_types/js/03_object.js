"use strict";
(function () {
    //define a type
    var Person = /** @class */ (function () {
        //define a constructor
        function Person(firstName, lastName) {
            //update properties
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    function showFullname(person) {
        return person.firstName + '_' + person.lastName;
    }
    //instantiated object
    var person = new Person('zhu', 'kong');
    console.log(showFullname(person));
})();
