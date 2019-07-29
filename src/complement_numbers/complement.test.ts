import { getComplement } from '.';

test('simple case', () => {
  expect(getComplement(5)).toBe(2);
});

test('longer number', () => {
  expect(getComplement(9999999)).toBe(6777216);
});