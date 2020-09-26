import Analysis from '../modules/arrayAnalysis';

const myAnalysis = new Analysis();

test('analyze() an array', () => {
  const arr = [4, 3, 2, 5, 10, 29, 112];
  const result = myAnalysis.analyze(arr);
  expect(result.min).toBe(2);
  expect(result.min).not.toBe(100);
  expect(result.max).toBe(112);
  expect(result.length).toBe(7);
  expect(result.average).toBeCloseTo(23.57);
});