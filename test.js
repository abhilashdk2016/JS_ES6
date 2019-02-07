const { reverse_reduce } = require('./index');

test('Reverse function exists', () => {
  expect(reverse_reduce).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse_reduce('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse_reduce('  abcd')).toEqual('dcba  ');
});
