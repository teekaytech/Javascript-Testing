import Calculator from '../modules/calculator';

test('calculator object', () => {
  const {
    add, subtract, divide, multiply,
  } = Calculator;
  expect(add(1, 2)).toBe(3);
  expect(subtract(1, 2)).toBe(-1);
  expect(subtract(8, 7)).toBe(1);
  expect(divide(100, 5)).toBe(20);
  expect(divide(0, 5)).toBe(0);
  expect(multiply(5, 4)).toBe(20);
});