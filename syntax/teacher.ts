import { Human } from './human';

class Teacher implements Human {
	//* Human 상속이므로 firstName 과 lastName filed를 이미 갖는다
	fullName: string;

	constructor(
		public firstName: string,
		public middleInitial: string,
		public lastName: string
	) {
		this.fullName = `${firstName} ${middleInitial} ${lastName}`;
	}

	study(): string {
		return `${this.fullName} is studying!!.`;
	}
}

const teacher = new Teacher('jun', 'M.', 'User');

console.log(teacher.study());
