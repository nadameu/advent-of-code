const turn = require('./turn');
const walk = require('./walk');

const path = commands => {
	let current = { x: 0, y: 0, dir: 0 };
	let list = [current];
	for (const command of commands) {
		current = turn(current, command.turn);
		for (let i = 0; i < command.walk; i++) {
			current = walk(current, 1);
			list.push(current);
		}
	}
	return list;
};

module.exports = path;
