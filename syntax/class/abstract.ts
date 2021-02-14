abstract class Animal {
	//* 추상 method
	abstract makeSound(): void;

	//* 일반 method
	move(): void {
		console.log('roaming the earth...');
	}
}

//* 직접 인스턴스를 생성할수 없다
// new Animal(); //! error : Cannot create an instance of an abstract class.

class Dog extends Animal {
	//* 추상 클래스를 상속한 클래스는 추상 method를 반드시 구현해야 한다
	makeSound(): void {
		console.log('awoooooo...');
	}
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
