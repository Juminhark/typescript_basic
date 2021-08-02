var 이름 = 'kim'; // string만 들어올수있게 타입 설정
// 이름 = 123 // error
이름 = 'ju';
var 박스 = ['kim', 'park'];
var 사람 = { name: 'kim' };
var 혹은 = 123;
var 예제 = [1, 2, 3];
function 함수(x) {
    return x * 2;
}
console.log(함수(4));
var john = [3, false];
var jany = {
    name: 'ja',
    first: 'ny',
    last: 'jaaa',
};
// class 경우
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
