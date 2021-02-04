# TypeScript

<img src="https://poiemaweb.com/img/typescript-logo.png" width="60%" height="50%" alt="typescript-logo"></img>

### 1. 소개

- JavaScript는 초창기에 웹페이지의 보조적인 기능을 수행하기 위해 한정적인 용도로 사용되었다.
  대부분 로직이 주로 web server에서 실행되었고 client는 server로 부터 전달받은 html과 css를
  렌더링하는 수준이였다.

- HTML5가 등장하기 이전까지 web application은 플래시, 실버라이트, 액티브액스와 같은 플러그인에
  의존하여 인터렉티브한 웹페이지를 구축해왔다. 그러다가 HTML5가 등장함으로써 플로그인에 의존하던
  구축방식은 JavaScript로 대체되었다. 또한 AJAX의 활성화로 데스크탑 application과 유사한 사용자
  경험을 제공할수 있는 SPA(Single Page Application)가 대세가 되었다. 이로써 과거 server측이
  담당하던 업무의 많은 부분이 client측으로 이동하게 되었고, JavaScript는 web의 어셈블리 언어로
  불릴만큼 중요한 언어로 그 위상이 높아지게 되었지만 언어가 잘 정제되기 이전에 서둘러 출시된
  문제와 과거 웹페이즈의 보저적인 기능을 수행하기 위해 한정적인 용도로 만들어진 태생적 한계가
  존재한다.

- Javscript는 C나 JAVA 와 같은 언어와는 구별되는 아래와 같은 특성이 있다.

  - Prototype-based Object Oriented Language
  - Scope와 this
  - 동적 타입(dynamic typed) 언어 혹은 느슨한 타입(loosely typed) 언어

- 이와 같은 특성은 클래스 기반의 객체지향언어에 익숙한 개발자를 혼란스럽게 하며 코드가 복잡해질
  수 있고 디버그와 테스트 횟수가 증가하는 등의 문제를 일으킬수 있어 규모가 큰 프로젝트에서는
  주의하여야한다.

- 이같은 자바스크립트의 태생적 문제를 극복하고자 CoffeeScript, Dart, Haxe와 같은 AltJS가 등장하였다.

- TypeScript 또한 자바스크립트 대체 언어의 하나로써 자바스크립트(ES5)의 Superset(상위확장)이다. C#의 창시자인 덴마크 출신 소프트웨어 엔지니어 Anders Hejlsberg(아네르스 하일스베르)가 개발을 주도한 TypeScript는 Microsoft에서 2012년 발표한 오픈소스로, 정적 타이핑을 지원하며 ES6(ECMAScript 2015)의 클래스, 모듈 등과 ES7의 Decorator 등을 지원한다.

<img src="https://poiemaweb.com/img/typescript-superset.png" width="60%" height="50%" alt="typescript-superset"></img>

- TypeScript는 ES5의 Superset이므로 기존의 자바스크립트(ES5) 문법을 그대로 사용할 수 있다. 또한, ES6의 새로운 기능들을 사용하기 위해 Babel과 같은 별도 트랜스파일러(Transpiler)를 사용하지 않아도 ES6의 새로운 기능을 기존의 자바스크립트 엔진(현재의 브라우저 또는 Node.js)에서 실행할 수 있다.

- 이후 ECMAScript의 업그레이드에 따른 새로운 기능을 지속적으로 추가할 예정이여서 매년 업그레이드될 ECMAScript의 표준을 따라갈 수 있는 좋은 수단이 될 것이다.

1. [Node.js](https://nodejs.org/ko/)

2. TypeScript 컴파일러 설치 및 사용법

```sh
// TypeScript설치
> npm install -g typescript

// TypeScript 버젼 확인
> tsc -v
```

TypeScript 컴파일러(tsc)는 TypeScript파일(.ts)을 자바스크립트 파일로 Transpiling을 한다.

person.ts 생성

```sh
// person을 Transpiling
> tsc person
```

person.js 자동생성 된다 이때 버젼은 ES3이다 _기본버젼이 ES3이기때문_

```sh
// es6 버젼으로 Transpiling
> tsc person -t es6
```

```ts
// person.ts
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

### Reference

- [poiemaweb.com](https://poiemaweb.com/)
