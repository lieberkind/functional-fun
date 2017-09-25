const curry = fn => {
	// concatenates arguments until it matches or exceeds the arity of the
	// original function. At that point in time, call the original function
	const _curry = args => {
		return args.length >= fn.length
			? fn(...args)
			: (...otherArgs) => _curry([...args, ...otherArgs]);
	};

	// if the original function does not take any arguments, just return it
	return fn.length === 0 ? fn : _curry([]);
};

// works in the same way as curry, but without using an inner function. Uses
// recursion more elegantly (in my opinion), but exposes a more bloated
// interface
const curry2 = (fn, args = []) => {
	if (fn.length === 0) {
		return fn;
	}

	return args.length >= fn.length
		? fn(...args)
		: (...otherArgs) => curry2(fn, [...args, ...otherArgs]);
};

module.exports = {
	curry,
	curry2
};
