import readline from 'readline';
import { LoanCalculator } from './LoanCalculator';
import { parsePercentage, parsePositiveNumber, ValidationError } from './validators';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
};

const run = async () => {
  try {
    const amountStr = await ask('Loan amount $: ');
    const amount = parsePositiveNumber(amountStr);

    const termStr = await ask('Loan term (month): ');
    const term = parsePositiveNumber(termStr);

    const rateStr = await ask('Interest rate: ');
    const rate = parsePercentage(rateStr);

    const loanCalculator = new LoanCalculator(amount, term, rate);

    const result = [
      `Total amount: $${loanCalculator.totalAmount}`,
      `Total interest: $${loanCalculator.totalInterest}`,
      `Monthly payment: $${loanCalculator.monthlyPayment}`
    ].join('. ');

    console.log(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error('invalid input');
    } else {
      console.error(error);
    }
  }

  rl.close();
};

run();
