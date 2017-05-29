//@flow

const turn = (obj, turnDirection) => Object.assign({}, obj, { dir: (obj.dir + (turnDirection === 'L' ? 3 : 1)) % 4 });
module.exports = turn;
