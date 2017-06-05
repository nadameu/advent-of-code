const fs = require('fs');

const count = (acc, x) => acc + (x ? 1 : 0);
const sum = (a, b, c) => a + b + c;
const isTrianglePossible = (a, b, c) => sum(a, b, c) > 2 * Math.max(a, b, c);
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input
	.trim()
	.split('\n');
console.log(lines.length);
const sides = lines
	.map(line => line
		.trim()
		.split(/\s+/g)
		.map(x => Number(x))
	);
const part1 = sides
	.map(([a, b, c]) => isTrianglePossible(a, b, c))
	.reduce(count, 0);
console.log('Part 1', part1);
const part2 = sides
	.reduce((acc, [a1, a2, a3], i) => {
		if (i % 3 > 0) return acc;
		const [b1, b2, b3] = sides[i + 1];
		const [c1, c2, c3] = sides[i + 2];
		return acc.concat([
			[a1, b1, c1],
			[a2, b2, c2],
			[a3, b3, c3]
		].map(([a, b, c]) => isTrianglePossible(a, b, c)));
	}, [])
	.reduce(count, 0);
console.log('Part 2', part2);
