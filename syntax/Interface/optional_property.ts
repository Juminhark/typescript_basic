//? 선택적 프로퍼티(Optional Property)
//* 선택적으로 필요한 properties는 ? 키워드를 사용
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
