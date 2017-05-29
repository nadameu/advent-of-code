//@flow

const NINETY = Math.PI / 2;

const walk = obj => {
	const angle = NINETY * (1 - obj.dir);
	return Object.assign({}, obj, {
		x: obj.x + Math.round(Math.cos(angle)),
		y: obj.y + Math.round(Math.sin(angle))
	});
};

module.exports = walk;
