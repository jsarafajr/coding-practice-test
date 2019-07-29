import { LoanCalculator } from './LoanCalculator';

test('case 1', () => {
  const loanCalculator = new LoanCalculator(5000, 12, 10);
  expect(loanCalculator.totalInterest).toEqual(500);
  expect(loanCalculator.monthlyPayment).toEqual(458);
  expect(loanCalculator.totalAmount).toEqual(5500);
});