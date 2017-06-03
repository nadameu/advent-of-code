const strictEquals = (x, y) => x === y;

const makeFilterer = (f, composer) => (acc, x, i, xs) => f(acc, x, i, xs) ? composer(acc, x) : acc;

const or = (x, y) => x || y;
const concatArray = (arr, x) => {
	arr.push(x);
	return arr;
};
const lessThan = (x, y) => x < y;

const makeInnerReduce = (xs, x, i, equals) => xs.reduce(makeFilterer((_, x2, i2) => lessThan(i2, i) && equals(x, x2), or), false);

const makeOuterReduce = (xs, equals) => xs.reduce(makeFilterer((_, x, i) => makeInnerReduce(xs, x, i, equals), concatArray), []);

const dupe = (arr, equals = strictEquals) => makeOuterReduce(arr, equals);

module.exports = dupe;
