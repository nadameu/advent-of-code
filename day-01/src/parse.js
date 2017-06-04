//@noflow
/* eslint-env node */

const reSplit = /\s*,\s*/g;
const reSeparate = /^(L|R)(\d+)$/;

const compose = (f, g) => x => f(g(x));
const separate = command => command.match(reSeparate).slice(1);
const pairToObj = pair => ({ turn: pair[0], walk: parseInt(pair[1], 10) });

const parse = input => input
	.trim()
	.split(reSplit)
	.map(compose(pairToObj, separate));

module.exports = parse;
