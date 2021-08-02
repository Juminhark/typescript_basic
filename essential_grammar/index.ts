let 이름: string = 'kim'; // string만 들어올수있게 타입 설정

// 이름 = 123 // error
이름 = 'ju';

let 박스: string[] = ['kim', 'park'];

let 사람: { name?: string } = { name: 'kim' };

let 혹은: string | number = 123;

type 내타입 = string[] | number[];

let 예제: 내타입 = [1, 2, 3];

function 함수(x: number): number {
	return x * 2;
}

console.log(함수(4));

// tuple 타입
type Member = [number, boolean];

let john: Member = [3, false];

// object 타입 지정할게 많은 경우

type manykey = {
	[key: string]: string;
};

let jany: manykey = {
	name: 'ja',
	first: 'ny',
	last: 'jaaa',
};

// class 경우

class User {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}
