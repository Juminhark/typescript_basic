class Queue<T> {
	protected data: Array<T> = [];

	push(item: T) {
		this.data.push(item);
	}

	pop(): T | undefined {
		return this.data.shift();
	}
}

//* number 전용 Queue
const numberQueue = new Queue<number>();

numberQueue.push(0);
// numberQueue.push('1'); //! error : Argument of type 'string' is not assignable to parameter of type 'number'.
numberQueue.push(+'1');

//? [optional chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining)
//* 값의 존재 여부 확인
console.log(numberQueue.pop()?.toFixed()); // 0
console.log(numberQueue.pop()?.toFixed()); // 1
console.log(numberQueue.pop()?.toFixed()); // undefined

//* string 전용 Queue
const stringQueue = new Queue<string>();

stringQueue.push('Hello');
stringQueue.push('World');

console.log(stringQueue.pop()?.toUpperCase()); // HELLO
console.log(stringQueue.pop()?.toUpperCase()); // WORLD
console.log(stringQueue.pop()?.toUpperCase()); // undefined

//* 커스텀 객체 전용 Queue
const myQueue = new Queue<{ name: string; age: number }>();
myQueue.push({ name: 'Lee', age: 10 });
myQueue.push({ name: 'Kim', age: 20 });

console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // { name: 'Kim', age: 20 }
console.log(myQueue.pop()); // undefined
