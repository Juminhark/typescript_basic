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
