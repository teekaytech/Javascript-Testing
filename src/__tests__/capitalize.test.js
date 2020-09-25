import capitalize from '../modules/capitalize';

test('should capitalize first character', () => {
  expect(capitalize('hello')).toBe('Hello');
});
