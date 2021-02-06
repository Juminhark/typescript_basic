"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Teacher = /** @class */ (function () {
    function Teacher(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Teacher.prototype.study = function () {
        return this.fullName + " is studying!!.";
    };
    return Teacher;
}());
var teacher = new Teacher('jun', 'M.', 'User');
console.log(teacher.study());
