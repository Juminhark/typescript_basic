interface Person {
	name: string;
	age?: number;
}

interface Robot {
	ai: boolean;
}

interface Humanoid extends Person, Robot {
	upgrade: number;
}

const humanoid: Humanoid = {
	name: 'ju',
	age: 12,
	ai: true,
	upgrade: 3,
};

console.log(humanoid);
