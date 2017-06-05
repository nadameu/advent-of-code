const decypher = (layout, start, input) => {
	const currentXY = [-1, -1];
	layout.forEach((line, y) => {
		const x = line.indexOf(start);
		if (x > -1) {
			currentXY[0] = x;
			currentXY[1] = y;
		}
	});
	const list = [];
	input.trim().split('\n').forEach(line => {
		line.trim().split('').forEach(command => {
			const [x, y] = currentXY;
			let newXY;
			switch (command) {
				case 'L':
					newXY = [Math.max(0, x - 1), y];
					break;

				case 'R':
					newXY = [Math.min(x + 1, layout[y].length - 1), y];
					break;

				case 'U':
					newXY = [x, Math.max(0, y - 1)];
					break;

				case 'D':
					newXY = [x, Math.min(y + 1, layout.length - 1)];
					break;
			}
			const [newX, newY] = newXY;
			if (layout[newY][newX] !== ' ') {
				currentXY[0] = newX;
				currentXY[1] = newY;
			}
		});
		const [x, y] = currentXY;
		list.push(layout[y][x]);
	});
	return list.join('');
};

module.exports = decypher;
