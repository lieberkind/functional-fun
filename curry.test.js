const { curry } = require('./curry');

test('scenario 0', () => {
	const alwaysTrue = () => true;
	const alwaysTrueCurried = curry(alwaysTrue);

	expect(alwaysTrueCurried()).toBe(true);
});

test('scenario 1', () => {
	const id = x => x;
	const curriedId = curry(id);

	expect(curriedId('hello')).toBe('hello');
});

test('scenario 2', () => {
	const addTwoNumbers = curry((a, b) => a + b);
	const add10 = addTwoNumbers(10);

	expect(add10(20)).toBe(30);
});

test('scenario 3', () => {
	const addThreeNumbers = curry((a, b, c) => a + b + c);

	const addTwoNumbersTo10 = addThreeNumbers(10);

	console.log(addTwoNumbersTo10(5));

	const add10ThenAdd5 = addTwoNumbersTo10(5);

	console.log(add10ThenAdd5);

	expect(add10ThenAdd5(5)).toBe(20);
});
