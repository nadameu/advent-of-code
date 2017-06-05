const xoffsets = { 1: 1, 3: -1 };
const yoffsets = { 0: 1, 2: -1 };

const walk = obj => Object.assign({}, obj, {
	x: obj.x + (xoffsets[obj.dir] || 0),
	y: obj.y + (yoffsets[obj.dir] || 0)
});

module.exports = walk;
