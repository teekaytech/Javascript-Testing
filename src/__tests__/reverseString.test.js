import reverseString from '../modules/reverseString';

test('reversing a string', () => {
  expect(reverseString('backward')).toEqual('drawkcab');
  expect(reverseString('madam')).toBe('madam');
});