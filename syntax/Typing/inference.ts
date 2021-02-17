//? 타입 추론(type inference)
let bar = 123; // bar: number 추론
// bar = '123'; //!error : Type 'string' is not assignable to type 'number'.

let baz; // let baz: any 추론

baz = 'hello';
console.log(typeof baz); // string

baz = new String('hi');
console.log(typeof baz); // object

baz = true;
console.log(typeof baz); // string
