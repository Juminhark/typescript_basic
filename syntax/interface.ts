//? 변수와 인터페이스
interface Todo {
	id: number;
	content: string;
	completed: boolean;
}

//* 변수 todo의 타입으로 Todo interface를 선언하였다.
let todo: Todo;

//* 변수 todo는 Todo interface를 준수하여야 한다.
todo = { id: 1, content: 'typescript', completed: false };

let todos: Todo[] = [];

//* parameter todo의 타입으로 Todo interface를 선언
function addTodo(todo: Todo) {
	todos = [...todos, todo];
}

//* void는 return 값의 타입을 정의
const removeTodo = (): void => {
	if (todos.length) {
		todos.pop();
	}
};

//* parameter todo는 Todo interface를 준수하여야 한다.
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos); // [ { id: 1, content: 'typescript', completed: false } ]

removeTodo();
console.log(todos); // []

//? 함수와 인터페이스
//* 함수 인터페이스의 정의
interface SquareFunc {
	(num: number): number;
}

//* 함수 인터페이스를 구현하는 함수는 인터페이스를 준수하여야한다.
const squareFunc: SquareFunc = function (num: number) {
	return num * num;
};

const cubicFunc: SquareFunc = (num: number) => {
	return num * num * num;
};

console.log(squareFunc(2)); // 4
console.log(cubicFunc(2)); // 8

//? 함수와 인터페이스
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

//? 덕 타이핑 (Duck typing)
interface IDuck {
	quack(): void;
}

class MallardDuck implements IDuck {
	quack() {
		console.log('Quack!');
	}
}

class RedheadDuck {
	quack() {
		console.log('q~uack!');
	}
}

function makeNoise(duck: IDuck): void {
	duck.quack();
}

//* IDuck에 영향을 받지 않고 구현된 RedheadDuck class도
//* makeNoise parameter의 타입 체크를 실제 값으로만 체크하기 떄문에 통과한다
makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack!

//? 선택적 프로퍼티(Optional Property)
interface UserInfo {
	username: string;
	password: string;
	age?: number;
	address?: string;
}

const userInfo: UserInfo = {
	username: 'ju',
	password: 'aadd',
	age: 4,
};

console.log(userInfo);

//? 인터페이스 상속
