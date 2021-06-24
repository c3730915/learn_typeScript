"use strict";
(function () {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = {
        firstName: 'jay',
        lastName: 'den'
    };
    console.log(showFullName(person));
})();
