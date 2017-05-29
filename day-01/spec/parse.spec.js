/* eslint-env jasmine */

const parse = require('../src/parse');

describe('parse', function() {
	it('parses', function() {
		const input = '  R4 ,L3, L11, L45  ';
		const output = parse(input);
		const expected = [
			{ turn: 'R', walk: 4 },
			{ turn: 'L', walk: 3 },
			{ turn: 'L', walk: 11 },
			{ turn: 'L', walk: 45 }
		];
		expect(output).toEqual(expected);
	});
});
