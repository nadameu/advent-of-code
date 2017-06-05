const fs = require('fs');
const decypher = require('./decypher');

const keypadLayout = [
	['1', '2', '3'],
	['4', '5', '6'],
	['7', '8', '9']
];
const start = '5';
const input = fs.readFileSync('./src/input.txt', 'utf8');

console.log('Part 1', decypher(keypadLayout, start, input));

const keypadLayout2 = [
	'  1  ',
	' 234 ',
	'56789',
	' ABC ',
	'  D  '
].map(line => line.split(''));

console.log('Part 2', decypher(keypadLayout2, start, input));
