export class LoanCalculator {
  private amount: number;
  private term: number;
  private rate: number;

  constructor(amount: number, term: number, rate: number) {
    this.amount = amount;
    this.term = term;
    this.rate = rate / 100;
  }

  get totalInterest(): number {
    return this.rate / (this.term / 12) * this.amount;
  }

  get monthlyPayment(): number {
    return Math.round((this.amount + this.totalInterest) / this.term);
  }

  get totalAmount(): number {
    return this.amount + this.totalInterest;
  }
}