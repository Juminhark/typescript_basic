//? 클래스와 인터페이스
//* interface의 정의
interface IUser {
	name: string;
	age: number;
	sayIam(): void;
}

//* interface를 구현하는 클래스는 properties와 추상 method를 구현해야한다.
class User implements IUser {
	//* interface에서 정의한 properties 구현
	constructor(public name: string, public age: number) {}

	//* interface에서 정의한 추상 method 구현
	sayIam() {
		console.log(`i am ${this.name}, ${this.age}`);
	}
}

interface ITodo {
	id: number;
	content: string;
	complemented: boolean;
	user: User;
}

//* Todo 클래스는 ITodo 인터페이스를 구현해야한다.
class Todo implements ITodo {
	constructor(
		public id: number,
		public content: string,
		public complemented: boolean,
		public user: User
	) {}
}

const greeter = (user: IUser): void => {
	user.sayIam();
};

const user = new User('ju', 28);
greeter(user);
const todo = new Todo(1, 'Typescript', false, user);
console.log(todo);
