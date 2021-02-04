//* Interface
export interface Human {
	firstName: string;
	lastName: string;
}

function greeter(human: Human) {
	return `hello, ${human.firstName} ${human.lastName}`;
}

let user = { firstName: 'zill', lastName: 'da' };

console.log(greeter(user));
