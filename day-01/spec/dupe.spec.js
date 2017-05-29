/* eslint-env jasmine */

const dupe = require('../src/dupe.js');

describe('dupe()', function() {
	it('finds duplicates in an array', function() {
		const input = [1, 2, 3, 4, 2, 4, 5, 6, 5, 7, 8];
		const output = dupe(input);
		const expected = [2, 4, 5];
		expect(output).toEqual(expected);

		const input2 = [4, 5, 6, 5, 6, 7, 1, 2, 3, 4];
		const output2 = dupe(input2);
		const expected2 = [5, 6, 4];
		expect(output2).toEqual(expected2);
	});

	it('finds duplicates in an array, given a comparison function', function() {
		const proto = {
			toString() { return `Obj(${this.value})`; }
		};
		const { assign, create } = Object;
		const toObj = value => assign(create(proto), { value });
		const input = [1, 2, 3, 4, 2, 4, 5, 6, 5, 7, 8].map(toObj);
		const eq = (x, y) => x.value === y.value;
		const output = dupe(input, eq);
		const expected = [2, 4, 5].map(toObj);
		expect(output).toEqual(expected);

		const input2 = [4, 5, 6, 5, 6, 7, 1, 2, 3, 4].map(toObj);
		const output2 = dupe(input2, eq);
		const expected2 = [5, 6, 4].map(toObj);
		expect(output2).toEqual(expected2);
	});
});
