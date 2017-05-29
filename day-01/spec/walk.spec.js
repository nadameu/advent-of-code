//@flow
/* eslint-env jasmine */
const walk = require('../src/walk.js');

describe('walk', function() {
	it('takes a walker 1 block in the direction it is facing', function() {
		expect(walk({ x: 0, y: 0, dir: 0 })).toEqual({ x: 0, y: 1, dir: 0 });
		expect(walk({ x: 0, y: 0, dir: 1 })).toEqual({ x: 1, y: 0, dir: 1 });
		expect(walk({ x: 0, y: 0, dir: 2 })).toEqual({ x: 0, y: -1, dir: 2 });
		expect(walk({ x: 0, y: 0, dir: 3 })).toEqual({ x: -1, y: 0, dir: 3 });
	});
});
