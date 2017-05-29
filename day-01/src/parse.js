//@noflow
/* eslint-env node */

const reSplit = /\s*,\s*/g;
const reSeparate = /^(L|R)(\d+)$/;

const parse = input => input
	.trim()
	.split(reSplit)
	.map(tw => tw.match(reSeparate).slice(1))
	.map(tw => ({ turn: tw[0], walk: parseInt(tw[1], 10) }));


module.exports = parse;
