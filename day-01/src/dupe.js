const defaultFunction = (x, y) => x === y;
const isDuplicate = (wasDuplicate, x1, i1, x2, i2, fn) => wasDuplicate || (i2 < i1 && fn(x1, x2));

const dupe = (arr, fn = defaultFunction) => arr.reduce((acc, x, i) => {
	if (arr.reduce((acc, x2, i2) => isDuplicate(acc, x, i, x2, i2, fn), false)) acc.push(x);
	return acc;
}, []);

module.exports = dupe;
