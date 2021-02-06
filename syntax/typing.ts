//? Type Declaration : 타입 선언
//? 정적 타이핑 : 타입을 명시적으로 선언하여 강제.

//* 변수 foo는 string
let foo: string = 'hello';

//* 선언 타입과 다른경우 컴파일 시점에서 에러
// let bar: number = 'hello'; //! error : Type 'string' is not assignable to type 'number'.

//* 함수선언식
function multiply1(x: number, y: number): number {
	return x * y;
}

//* 함수표현식
const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply2(10, 3));
// console.log(multiply1(true, 1)); //! error : Argument of type 'boolean' is not assignable to parameter of type 'number'.

//* boolean
let isDone: boolean = false;

//* null
let n: null = null;

//* undefined
let u: undefined = undefined;

//* number
let decimal: number = 6;
let hex: number = 0xf00d; // 16진수
let binary: number = 0b1010; // 2 진수
let octal: number = 0o744; // 8진수

//* string: 원시 타입 문자열 타입
let color: string = 'blue';
color = 'red';
// color = new String('green'); //! error: 'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
let myName: string = `Lee`; // ES6 템플릿 문자열
let greeting: string = `Hello, my name is ${myName}.`; // ES6 템플릿 대입문

//* String: String 생성자 함수로 생성된 String 래퍼 객체 타입
let objectStr: String;
objectStr = 'hello'; // ok
objectStr = new String('hi'); // ok

//* object
const obj: object = {};

//* array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3]; // 제네릭 배열 타입

//* tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현
let tuple: [string, number];
tuple = ['hello', 10]; // OK
// tuple = [10, 10]; //! error : Type 'number' is not assignable to type 'string'.
// tuple = ['hello', 'hello']; //! error : Type 'string' is not assignable to type 'number'.
// tuple = ['hello', 10, 'world', 100]; //! error : Type '[string, number, string, number]' is not assignable to type '[string, number]'.
// tuple.push(true); //! error : Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

//* enum : 열거형은 숫자값 집합에 이름을 지정한 것이다.
enum Color1 {
	Red,
	Green,
	Blue,
}
let c1: Color1 = Color1.Green;

console.log(c1); // 1 :  첫번째 Red가  default 0 값을 갖게 되어 다음 값 Green은 1
console.log(Color1.Red);
console.log(Color1.Green);
console.log(Color1.Blue);

enum Color2 {
	Red = 1,
	Green,
	Blue,
}
let c2: Color2 = Color2.Green;

console.log(c2); // 2 : 첫번째 Red가 1값을 갖게 되어 다음 값 Green은 2
console.log(Color2.Blue);

enum Color3 {
	Red = 1,
	Green = 2,
	Blue = 4,
}
let c3: Color3 = Color3.Blue;

console.log(c3); // 4 : Blue가 숫자값 4를 갖게 되어 4

//* any: 타입 추론(type inference)할 수 없거나 타입 체크가 필요 없는 변수에 사용한다.
//* var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있다.
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

//* void : 일반적으로 함수에서 반환값이 없을 경우 사용한다.
function warnUser(): void {
	console.log('This is my warning message');
}

//* never : 결코 발생하지 않는 값
function infiniteLoop(): never {
	while (true) {}
}

function error(message: string): never {
	throw new Error(message);
}

//* Date 타입
const today: Date = new Date();

// nodejs는 server side이기 때문에 browser 환경으로.
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

// //* HTMLElement 타입
const elem: HTMLElement = dom.window.document.querySelector('p');

class Person {}
//* Person 타입
const person: Person = new Person();

//? 타입 추론
let bar = 123; // bar는 number 타입
// bar = '123'; //!error : Type 'string' is not assignable to type 'number'.

let baz; // let baz: any 와 동치

baz = 'hello';
console.log(typeof baz); // string

baz = new String('hi');
console.log(typeof baz); // object

baz = true;
console.log(typeof baz); // string
