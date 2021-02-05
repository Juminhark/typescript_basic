# TypeScript

<img src="https://poiemaweb.com/img/typescript-logo.png" width="60%" height="50%" alt="typescript-logo"></img>

### 1. 소개

- JavaScript 대체 언어의 하나로써 JavaScript(ES5)의 Superset(상위확장)이다. C#의 창시자인 덴마크 출신 소프트웨어 엔지니어 Anders Hejlsberg(아네르스 하일스베르)가 개발을 주도한 TypeScript는 Microsoft에서 2012년 발표한 오픈소스로, 정적 타이핑을 지원하며 ES6(ECMAScript 2015)의 클래스, 모듈 등과 ES7의 Decorator 등을 지원한다.

<img src="https://poiemaweb.com/img/typescript-superset.png" width="60%" height="50%" alt="typescript-superset"></img>

- TypeScript는 ES5의 Superset이므로 기존의 JavaScript(ES5) 문법을 그대로 사용할 수 있다. 또한, ES6의 새로운 기능들을 사용하기 위해 Babel과 같은 별도 트랜스파일러(Transpiler)를 사용하지 않아도 ES6의 새로운 기능을 기존의 JavaScript 엔진(현재의 브라우저 또는 Node.js)에서 실행할 수 있다.

- 이후 ECMAScript의 업그레이드에 따른 새로운 기능을 지속적으로 추가할 예정이여서 매년 업그레이드될 ECMAScript의 표준을 따라갈 수 있는 좋은 수단이 될 것이다.

### 2. 장점

- 정적 타입

```ts
// error : TSError: ⨯ Unable to compile TypeScript:
const sum = (a, b) => {
	return a + b;
};

// 정확한 parameter의 타입을 명시하여 개발자의 의도에 따라 기능이 수행되도록 돕는다.
const sum = (a: number, b: number) => {
	return a + b;
};

console.log(sum(1, 2));
```

- 강력한 객체지향 프로그래밍 지원
  - 인터페이스, 제네릭 등과 같은 강력한 객체지향 프로그래밍 지원은 크고 복잡한 프로젝트의 코드 기반을 쉽게 구성할 수 있도록 도우며, Java, C# 등의 클래스 기반 객체지향 언어에 익숙한 개발자가 자바스크립트 프로젝트를 수행하는 데 진입 장벽을 낮추는 효과도 있다.

### 개발환경 구축

- [Node.js](https://nodejs.org/ko/)

- TypeScript 컴파일러 설치

```sh
// 설치
> npm install -g typescript

// 확인
> tsc -v
```

### 사용 방법 및 tsc 옵션 설정

- TypeScript 컴파일러(tsc)는 TypeScript파일(.ts)을 JavaScript 파일로 Transpiling을 한다.

```ts
// person.ts 생성
export class Person {
	protected name: string;

	constructor(name: string) {
		this.name = name;
	}
	sayHello() {
		return 'Hello, ' + this.name;
	}
}
```

```sh
// person을 Transpiling
> tsc person
```

- person.js 자동생성 된다 이때 버젼은 ES3이다 _기본버젼이 ES3이기때문_

```sh
// es6 버젼으로 Transpiling
> tsc person -t es6
```

```ts
// student.ts
import { Person } from './person';

class Student extends Person {
	study(): string {
		return `${this.name} is studying.`;
	}
}

const student = new Student('Lee');

console.log(student.sayHello());

console.log(student.study());
```

```sh
// person.ts , student.ts 2개 동시에 Transpiling
> tsc person student


// watch -w 옵션으로 변경되었을때 자동으로 Transpiling
> tsc student --watch
```

- tsc 옵션 설정 파일을 생성해서 매번 옵션을 지정하는 것은 대신한다

```sh
// tsconfig.json 생성
> tsc --init

// tsconfig.json을 무시
> tsc person

// tsconfig.json을 적용
> tsc
```

### typescript 연습을 위한 개발환경 구축

```sh
// init
> yarn init

// devDependencies
> yarn add -D typescript nodemon ts-node @types/node

// tsc 설정
> tsc --init
```

```ts
// package.json
{
  ...
  "scripts": {
		"dev": "nodemon --config nodemon.json index.ts",
		"dev:debug": "nodemon --config nodemon.json --inspect-brk index.ts"
  },
  ...
}

// nodemon.json
{
	"restartable": "rs",
	"ignore": [".git", "node_modules/", "dist/", "coverage/"],
	"watch": ["./"],
	"execMap": {
		"ts": "node -r ts-node/register"
	},
	"env": {
		"NODE_ENV": "development"
	},
	"ext": "js,json,ts"
}

```

### 외부 라이브러리 사용

- TypeScript를 사용하는 이유는 여러가지 있지만 가장 큰 장점은 다양한 도구의 지원을 받을 수 있다는 것이다. TypeScript는 정적 타입을 지원하므로 높은 수준의 IntelliSense나 리팩토링 등을 지원하며 이러란 도구의 지원은 대규모 프로젝트를 위한 필수적 요소이기도 하다.

- 프로젝트 내에는 필수적으로 다양한 라이브러리가 포함되는데 이 라이브러리들은 JavaScript로 작성되어있다. TypeScript는 ES5의 Superset(상위확장)이므로 JavaScript를 그대로 사용할 수 있다. 하지만 정적 타입이 없는 JavaScript를 그대로 사용하면 VSCode에서 제공하는 IntelliSense와 같은 다양한 도구의 지원을 받을 수 없다.

- 따라서 외부 JavaScript 라이브러리에 대해서도 타입체크를 수행하려면 해당 라이브러리의 타입이 정의되어 있는 정의 파일(Definition file)을 제공해야 한다.

```sh
> yarn add lodash

> yarn add -D @types/lodash
```

```ts
// index.ts
import * as _ from 'lodash';

class Startup {
	public static main(): number {
		const group = _.groupBy(['one', 'two', 'three'], 'length');
		console.log(group); // => { '3': ['one', 'two'], '5': ['three'] }
		return 0;
	}
}

Startup.main(); // { '3': [ 'one', 'two' ], '5': [ 'three' ] }
```

### Reference

- [poiemaweb.com](https://poiemaweb.com/)
- [TypeScript & Nodemon — The Ultimate Setup!](https://levelup.gitconnected.com/typescript-nodemon-the-ultimate-setup-7200aa60cc8b)
