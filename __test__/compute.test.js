'use strict';

const compute = require('../lib/compute');
require('jest');

describe('Time Stamp', () => {
  it('Should revert time stamp to previous midnight', () => {
    expect(compute.timeStamp(1513362321)).toBe(1513296000);
  });
});