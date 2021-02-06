import * as _ from 'lodash';

class Startup {
	public static main(): number {
		const group = _.groupBy(['one', 'two', 'three'], 'length');
		console.log(group); // => { '3': ['one', 'two'], '5': ['three'] }
		return 0;
	}
}

Startup.main();
