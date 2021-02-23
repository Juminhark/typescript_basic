import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';

// Importing Routes
import IndexRoutes from './routes';
import BooksRoutes from './routes/books';

//? Initializations
const app = express();

//? Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs({
		extname: '.hbs',
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		helpers: require('./lib/helpers'),
	})
);
app.set('view engine', '.hbs');

//? Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//? Routes
app.use(IndexRoutes);
app.use('/books', BooksRoutes);

//? Static files
app.use(express.static(path.join(__dirname, 'public')));

//? Stating the Server
app.listen(app.get('port'), () => {
	console.log(`Server running at http://localhost:${app.get('port')}`);
});
