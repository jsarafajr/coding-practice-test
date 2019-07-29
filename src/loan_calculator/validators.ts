export class ValidationError extends Error {}

export const parsePositiveNumber = (input: string): number => {
  const result = parseInt(input);

  if (isNaN(result) || result < 0) throw new ValidationError();

  return result;
};

export const parsePercentage = (input: string): number => {
  const result = parsePositiveNumber(input);

  if (result < 0 || result > 100) throw new ValidationError();

  return result;
};