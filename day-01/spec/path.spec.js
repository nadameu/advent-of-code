/* eslint-env jasmine */

const path = require('../src/path');

describe('path', function() {
	it('build a path from a list of commands', function() {
		const input = [
			{ turn: 'R', walk: 2 },
			{ turn: 'L', walk: 3 }
		];
		const output = path(input);
		const expected = [
			{ x: 0, y: 0, dir: 0 },
			{ x: 1, y: 0, dir: 1 },
			{ x: 2, y: 0, dir: 1 },
			{ x: 2, y: 1, dir: 0 },
			{ x: 2, y: 2, dir: 0 },
			{ x: 2, y: 3, dir: 0 }
		];
		expect(output).toEqual(expected);
	});
});
