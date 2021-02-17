//? readonly : readonly가 선언된 filed는 선언 시, 생성자 내부에서만 값을할당할수 있다.

class Foo {
	private readonly MAX_LEN: number = 5;
	private readonly MSG: string;

	constructor() {
		this.MSG = 'hello';
		// 생성자 내부여서 값 할당 가능.
		this.MAX_LEN = 10;
	}

	log() {
		// readonly가 선언된 프로퍼티는 재할당이 금지된다.
		// this.MAX_LEN = 10; //! error: Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.

		console.log(`MAX_LEN: ${this.MAX_LEN}`); // MAX_LEN: 5
		console.log(`MSG: ${this.MSG}`); // MSG: hello
	}
}

new Foo().log();
