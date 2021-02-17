//? 인터페이스 상속(Inheritance)
interface Human {
	name: string;
	age?: number;
}

interface Robot {
	ai: boolean;
}

interface Humanoid extends Human, Robot {
	upgrade: number;
}

const humanoid: Humanoid = {
	name: 'ju',
	age: 12,
	ai: true,
	upgrade: 3,
};

console.log(humanoid);

class Person {
	constructor(public name: string, public age: number) {}
}

interface Developer extends Person {
	skills: string[];
}

const developer: Developer = {
	name: 'lee',
	age: 20,
	skills: ['java', 'javascript'],
};

console.log(developer);
