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

// 개발중인 index.ts 실행
> yarn ts:node

// index.ts에 변화가 생길때마다 재실행
> yarn dev
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

## dev setting

- dev중인 directory 실행

  - nodejs(server side js)를 typescript로 개발중이므로 실행에 필요한 dev-dependencies 필요
  - typescript ts-node nodemon

```js
// nodemon.json
{
  "watch" : [
    "src"
  ],
  "ext": "ts",
  "ignore": [
    "src/**/*.spec.ts"
  ],
  "exec": "ts-node ./src/index.ts"
}
```

- unit test후 build된 directory 실행

## handlebars

```ts
// index.ts

app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs({
		extname: '.hbs',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		helpers: require('./lib/helpers'),
	})
);
app.set('view engine', '.hbs');
```

## Routes

```ts
// index.ts
import IndexRoute from './routes';

app.use('/books', IndexRoute);

// ./routes/index.ts
import { Router } from 'express';

const router: Router = Router();
router.get('/', (req, res) => {
	res.send('hello world');
});

export default router;
```

## [getbootstrap](https://getbootstrap.com/)

## Error issue

- Handlebars: Access has been denied to resolve the property "title" because it is not an "own property" of its parent
  - [solve](https://github.com/handlebars-lang/handlebars.js/issues/1648)

```ts
// index.ts
// Access own property
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

app.engine(
	'.hbs',
	exphbs({
		... ,
		handlebars: allowInsecurePrototypeAccess(Handlebars),
	})
);
```
