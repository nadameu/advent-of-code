const turn = require('./turn');
const walk = require('./walk');

const makeLink = (value, next = null) => ({ value, next });

const reverseList = list => {
	function _reverse(acc, _list) {
		if (_list === null) {
			return acc;
		} else {
			return _reverse(makeLink(_list.value, acc), _list.next);
		}
	}
	return _reverse(null, list);
};

const listToArray = list => {
	const arr = [];
	let current = list;
	while (current !== null) {
		arr.push(current.value);
		current = current.next;
	}
	return arr;
};

const path = commands => {
	const initial = makeLink({ x: 0, y: 0, dir: 0 });
	const reversedList = commands.reduce((previousLink, command) => {
		const previousWalker = previousLink.value;
		let currentWalker = turn(previousWalker, command.turn);
		let currentLink;
		for (let i = 0; i < command.walk; i++) {
			currentWalker = walk(currentWalker, 1);
			currentLink = makeLink(currentWalker, previousLink);
			previousLink = currentLink;
		}
		return currentLink;
	}, initial);
	const list = reverseList(reversedList);
	return listToArray(list);
};

module.exports = path;
