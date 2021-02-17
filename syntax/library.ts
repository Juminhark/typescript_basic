import * as _ from 'lodash';

class Startup {
	public static main(): number {
		const group = _.groupBy(['one', 'two', 'three'], 'length');
		console.log(group); // => { '3': ['one', 'two'], '5': ['three'] }
		// length를 중점, 3길이는 one, two, 5길이는 three
		return 0;
	}
}

Startup.main();
