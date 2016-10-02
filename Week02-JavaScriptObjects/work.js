var person = {
    firstName: "Hyejin",
    lastName: "Jun",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
};

divider('Person');
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

var calculator = {
    operator01: person.firstName.length,
    operator02: person.lastName.length,
    add: function() {
        return this.operator01 + this.operator02
    },
    subtract: function() {
        return this.operator01 - this.operator02
    }
};

calculator.multiply = function() {
    return calculator.operator01 * calculator.operator02;
};

function divider(title) {
    console.log("=========================");
    console.log(title);
    console.log("=========================");
}

divider('Calculator');
console.log("operator01: " + calculator.operator01);
console.log("operator02: " + calculator.operator02);
console.log("Add: " + calculator.add());
console.log("Subtract: " + calculator.subtract());
console.log("Multiply: " + calculator.multiply());