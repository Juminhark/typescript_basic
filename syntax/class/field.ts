//? 생성자 parameter에 접근 제한자 선언

class FooField {
	//* 접근 제한자가 선언된 생성자 파라미터 x는 클래스 프로퍼티로 선언되고 지동으로 초기화된다.
	//* public이 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다.
	constructor(public x: string) {}
}

const fooField = new FooField('Hello');
console.log(fooField); // FooField { x: 'Hello' }
console.log(fooField.x); // Hello

//* public 접근 제한자로 선언된  field는  외부에서 직접 조작이 가능
fooField.x = 'x1';
console.log(fooField.x); // x1

class BarField {
	//* 접근 제한자가 선언된 생성자 파라미터 x는 멤버 변수로 선언되고 자동으로 초기화된다.
	//* private이 선언되었으므로 x는 클래스 내부에서만 참조 가능하다.
	constructor(private x: string) {}
}

const barField = new BarField('Hello');

console.log(barField); // BarField { x: 'Hello' }

//* private이 선언된 bar.x는 클래스 내부에서만 참조 가능하다
// console.log(barField.x); //! error : Property 'x' is private and only accessible within class 'Bar'.

class Person {
	//* name은 생성자 내부에서만 유효한 지역 변수이다.
	//* 접근제한자를 설정하지 않아 field가 아니기 때문에
	constructor(public firstName: string, name: string) {
		console.log(name);
	}
}

const bar = new Person('first', 'name'); // name
console.log(bar); // Person { firstName: 'first' }
