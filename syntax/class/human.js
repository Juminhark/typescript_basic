"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(human) {
    return "hello, " + human.firstName + " " + human.lastName;
}
var user = { firstName: 'zill', lastName: 'da' };
console.log(greeter(user));
