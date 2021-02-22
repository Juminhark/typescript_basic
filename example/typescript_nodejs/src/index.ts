import express from 'express';

//? Initializations
const app = express();

//? Settings
app.set('port', 3000);

//? Middlewares

//? Routes

//? Static files

//? Stating the Server
app.listen(app.get('port'), () => {
	console.log(`Server running at http://localhost:${app.get('port')}`);
});
