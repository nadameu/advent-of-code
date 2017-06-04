const defaultHashFunction = x => x.toString();

const dupe = (arr, hashFn = defaultHashFunction) => arr.reduce((acc, x) => {
	const hash = hashFn(x);
	if (hash in acc.visited) {
		acc.filtered.push(x);
	}
	acc.visited[hash] = x;
	return acc;
}, { visited: {}, filtered: []}).filtered;

module.exports = dupe;
