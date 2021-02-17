class Queue {
	protected data: any[] = [];

	push(item: any) {
		this.data.push(item);
	}

	pop() {
		return this.data.shift();
	}
}

const queue = new Queue();

queue.push(0);
queue.push('1'); // 의도하지 않은 실수!

console.log(queue.pop().toFixed()); // 0
// console.log(queue.pop().toFixed()); //! error :  Runtime error
//* Number.prototype.toFixed 로 '1'에서 error 발생

//* 위 문제를 해결하기 위해 새로운 queue 정의
class NumberQueue extends Queue {
	//* number 타입의 요소만을 push한다.
	push(item: number) {
		super.push(item);
	}

	pop(): number {
		return super.pop();
	}
}

const queue2 = new NumberQueue();

queue2.push(0);
// queue2.push('1'); //! error :  Argument of type 'string' is not assignable to parameter of type 'number'.
queue2.push(+'1');
