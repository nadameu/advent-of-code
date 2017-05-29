/* eslint-env jasmine */

const distance = require('../src/distance');

describe('distance()', function() {
	it('calculates the distance from the origin (taxicab pattern)', function() {
		const input = [
			{ x: 0, y: 0 },
			{ x: 0, y: 5 },
			{ x: 5, y: 0 },
			{ x: 0, y: -3 },
			{ x: -4, y: 0 },
			{ x: 5, y: -8 }
		];
		const output = input.map(distance);
		const expected = [0, 5, 5, 3, 4, 13];
		expect(output).toEqual(expected);
	});
});
