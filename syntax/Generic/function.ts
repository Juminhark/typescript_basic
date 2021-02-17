//? function
function reverse<T>(items: T[]): T[] {
	return items.reverse();
}

const arg = [1, '2', 3, 4, 5];

//* parameter(인수)에 의해 타입 매개변수가 결정된다
const reversed = reverse(arg);
console.log(reversed); // [ 5, 4, 3, '2', 1 ]

const list = [{ name: 'Lee' }, { name: 'Kim' }];
const reverseList = reverse(list);
console.log(reverseList); // [ { name: 'Kim' }, { name: 'Lee' } ]
