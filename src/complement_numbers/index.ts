const integerToBitArray = (input: number) => {
  return input.toString(2).split('').map(Number);
};

export const getComplement = (input: number): number => {
  const bitArray = integerToBitArray(input);
  const reverseBitArray = bitArray.map(b => b ^ 1);
  return parseInt(reverseBitArray.join(''), 2);
};