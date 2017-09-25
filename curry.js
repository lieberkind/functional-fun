const curry = fn => {
	const _curry = args => {
		return args.length >= fn.length
			? fn(...args)
			: (...otherArgs) => _curry([...args, ...otherArgs]);
	};

	return fn.length === 0 ? fn : _curry([]);
};

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
