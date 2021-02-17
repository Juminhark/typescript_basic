//? static(정적) : static 선언은 class의 인스턴스생성 없이 호출할수 있다.

class FooStatic {
	//* static filed
	static counter = 0;

	constructor(public prop: any) {
		this.prop = prop;

		//* 생성될때마다 늘어남
		FooStatic.counter++;
	}

	static staticMethod() {
		//* 정적 메소드는 this를 사용할 수 없다.
		//* 정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다.
		console.log(this); // [Function: FooStatic] { staticMethod: [Function], counter: 0 }
		return 'staticMethod';
	}

	prototypeMethod() {
		return this.prop;
	}
}

//* static은 클래스 이름으로 호출한다.
console.log(FooStatic.staticMethod());
console.log(FooStatic.counter);

const fooStatic = new FooStatic(123);
//* 정적 메소드는 인스턴스로 호출할 수 없다.
// console.log(fooStatic.staticMethod()); //! error : Uncaught TypeError: foo.staticMethod is not a function
console.log(FooStatic.counter); // 1
