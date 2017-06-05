/* eslint-env jasmine */
const turn = require('../src/turn.js');

describe('turn', function() {
	it('turns a walker in the given direction', function() {
		expect(1).toBe(1);
		expect(turn({ dir: 0 }, 'L')).toEqual({ dir: 3 });
		expect(turn({ dir: 1 }, 'L')).toEqual({ dir: 0 });
		expect(turn({ dir: 2 }, 'L')).toEqual({ dir: 1 });
		expect(turn({ dir: 3 }, 'L')).toEqual({ dir: 2 });

		expect(turn({ dir: 0 }, 'R')).toEqual({ dir: 1 });
		expect(turn({ dir: 1 }, 'R')).toEqual({ dir: 2 });
		expect(turn({ dir: 2 }, 'R')).toEqual({ dir: 3 });
		expect(turn({ dir: 3 }, 'R')).toEqual({ dir: 0 });

		expect(turn({ dir: 0 }, 'not a direction')).toEqual({ dir: 0 });
		expect(turn({ dir: 1 }, 'not a direction')).toEqual({ dir: 1 });
		expect(turn({ dir: 2 }, 'not a direction')).toEqual({ dir: 2 });
		expect(turn({ dir: 3 }, 'not a direction')).toEqual({ dir: 3 });
	});
});
