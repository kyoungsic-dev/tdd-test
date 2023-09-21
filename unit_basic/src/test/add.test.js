const add = require('../add');

test('add', () => {
  expect(add(3, 5)).toBe(8);
  expect(add(1, 2)).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add(1, 2)).toBe(3);
});
