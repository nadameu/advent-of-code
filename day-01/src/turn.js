//@flow

const turn = (obj, turnDirection) => Object.assign({}, obj, { dir: (obj.dir + (turnDirection === 'L' ? 3 : turnDirection === 'R' ? 1 : 0)) % 4 });
module.exports = turn;
