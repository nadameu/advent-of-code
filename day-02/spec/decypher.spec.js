const decypher = require('../src/decypher');

describe('decypher', function() {
	it('first part', function() {
		const keypadLayout = [
			['1', '2', '3'],
			['4', '5', '6'],
			['7', '8', '9']
		];
		const start = '5';
		const input =
`ULL
RRDDD
LURDL
UUUUD`;
		const output = decypher(keypadLayout, start, input);
		const expected = '1985';
		expect(output).toBe(expected);
	});

	it('second part', function() {
		const keypadLayout = [
			'  1  ',
			' 234 ',
			'56789',
			' ABC ',
			'  D  '
		].map(line => line.split(''));
		const start = '5';
		const input =
		`ULL
		RRDDD
		LURDL
		UUUUD`;
		const output = decypher(keypadLayout, start, input);
		const expected = '5DB3';
		expect(output).toBe(expected);
	});
});
