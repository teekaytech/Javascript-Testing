import capitalize from '../modules/capitalize';

test('should capitalize first character', () => {
  expect(capitalize('hello')).toEqual('Hello');
  expect(capitalize('MICROVERSE')).toBe('MICROVERSE');
});
