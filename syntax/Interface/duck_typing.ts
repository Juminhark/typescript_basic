//? 덕 타이핑 (Duck typing)
interface IDuck {
	quack(): void;
}

class MallardDuck implements IDuck {
	quack() {
		console.log('Quack!');
	}
}

class RedheadDuck {
	quack() {
		console.log('q~uack!');
	}
}

function makeNoise(duck: IDuck): void {
	duck.quack();
}

//* IDuck에 영향을 받지 않고 구현된 RedheadDuck class도
//* makeNoise parameter의 타입 체크를 실제 값으로만 체크하기 떄문에 통과한다
makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack!
