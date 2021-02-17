type Gender = 'male' | 'female';

interface Person {
	gender: Gender;
	name: string;
	age?: number;
}

//* 빈 객체를 Person 타입으로 지정
const person = {} as Person;
// person.gender = 'gi'; //! error : Type '"gi"' is not assignable to type 'Gender'.
person.gender = 'male';
person.name = 'Lee';
person.age = 20;
// person.address = 'seoul'; //! error : Property 'address' does not exist on type 'Person'.

console.log(person);

//* 문자열 리터럴로 타입 지정
type Str = 'Lee';

//* 유니온 타입으로 타입 지정
type Union = string | null;

//* 문자열 유니온 타입으로 타입 지정
type Name = 'Lee' | 'Kim';

//* 숫자 리터럴 유니온 타입으로 타입 지정
type Num = 1 | 2 | 3 | 4 | 5;

//* 객체 리터럴 유니온 타입으로 타입 지정
type Obj = { a: 1 } | { b: 2 };

//* 함수 유니온 타입으로 타입 지정
type Func = (() => string) | (() => void);

//* 인터페이스 유니온 타입으로 타입 지정
type Shape = Name | Num | Obj;

//* 튜플로 타입 지정
type Tuple = [string, boolean];
const t: Tuple = ['d', false];
