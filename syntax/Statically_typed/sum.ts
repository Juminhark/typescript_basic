const sum = (a: number, b: number): number => {
	return a + b;
};

console.log(sum(1, 2));
// console.log(sum('1', '2')); //! error : Argument of type 'string' is not assignable to parameter of type 'number'.
