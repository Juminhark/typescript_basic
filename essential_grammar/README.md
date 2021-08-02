## [typescript 쓰는 이유 필수문법 정리](https://www.youtube.com/watch?v=xkpcNolC270)

- js 특징

```js
// Dynamic Typing 때문에 이런게 js에서는 가능
// 숫자 - 문자 : 문자를 숫자로 바꿔서 진행 => 편리. 에러 가능성 높음
5 - '3';
```

### typescript의 장점

- 타입에 엄격한 검사

```ts
5 - '3'; // error
```

- error 메세지 퀄리티 오짐

### ts 파일은 js파일로 변환에서 브라우저에서 활용

```sh
> npm install -g typescript
> tsc -w
```

### tsconfig 는 tsc 옵션

```js
// tsconfig.json
{
	"compilerOptions": {
		"target": "es5",
		"module": "commonjs"
	}
}

```
