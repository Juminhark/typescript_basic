import { fromPairs } from 'lodash';
import mongoose from 'mongoose';

import { mongodb } from './keys';

mongoose
	.connect(mongodb.URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log('DB is connected'))
	.catch((err) => console.log(err));
