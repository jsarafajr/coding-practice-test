export const findSumOfTwo = (input: number[], target: number): number[] => {
  const map = new Map<number, number>();

  input.forEach((value, index) => {
    map.set(value, index);
  });

  for (let i = 0; i < input.length; i++) {
    const pair = target - input[i];
    if (map.has(pair)) {
      return [i, map.get(pair) as number];
    }
  }

  throw new Error('invalid input');
};