//? 함수와 인터페이스
//* 함수 인터페이스의 정의
interface SquareFunc {
	(num: number): number;
}

//* 함수 인터페이스를 구현하는 함수는 인터페이스를 준수하여야한다.
const squareFunc: SquareFunc = function (num: number) {
	return num * num;
};

const cubicFunc: SquareFunc = (num: number) => {
	return num * num * num;
};

console.log(squareFunc(2)); // 4
console.log(cubicFunc(2)); // 8
