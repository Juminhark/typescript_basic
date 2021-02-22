## TypeScript - nodeJS

- [Fazt Code](https://www.youtube.com/watch?v=UipIQ81kabs)
- nodejs(Server side js)의 언어를 TypeScript로 사용한 Server Application

## dependencies

- nodejs
- typescript
- mongodb
- express-handlebars

## cmd

```
// build
> yarn build

// delete build directory
> yarn clear

// start : build후 실행
> yarn start
```

## init

```
> yarn init

// install typescript
> yarn global add typescript

// version check
> tsc -v

// tsconfig.json
> tsc --init

// install dependencies
> yarn add express express-handlebars mongoose @types/express-handlebars @types/mongoose

// install devDependencies
> yarn add --dev @types/express handlebars typescript ts-node nodemon
```

## tsconfig.json

```ts
{
  "compilerOptions": {
    'target': 'es6',/* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    ...
    "outDir": "./build/src", /* Redirect output structure to the directory. */
    ...
    "moduleResolution": "node",  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */

  },
  "include": ["./src/**/*"],
	"exclude": ["node_modules"]
}
```

## basic server

```ts
// src/index.ts
import express from 'express';

//? Initializations
const app = express();

//? Settings
app.set('port', 3000);

//? Stating the Server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});
```

```
// build/src/index.js 생성
> tsc

// server start
> node build/src/index
```
