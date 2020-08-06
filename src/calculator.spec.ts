import { Calculator, Equation } from './calculator';

const calculator = new Calculator();

describe('calculator', () => {
  it('addition', () => {
    calculator.valueA = 6;
    calculator.valueB = 2;
    const result = calculator.result(Equation.Addition);
    expect(result).toBe(8);
  });

  it('subtraction', () => {
    calculator.valueA = 6;
    calculator.valueB = 2;
    const result = calculator.result(Equation.Subtraction);
    expect(result).toBe(4);
  });

  it('multiplication', () => {
    calculator.valueA = 6;
    calculator.valueB = 2;
    const result = calculator.result(Equation.Multiplication);
    expect(result).toBe(12);
  });

  it('division', () => {
    calculator.valueA = 6;
    calculator.valueB = 2;
    const result = calculator.result(Equation.Division);
    expect(result).toBe(3);
  });

  describe('negative', () => {
    it('invalid equation', () => {
      expect(() => calculator.result(5)).toThrow('Invalid equation: 5');
    });

    it('division by zero', () => {
      calculator.valueA = 6;

      calculator.valueB = 0;
      expect(() => calculator.result(Equation.Division)).toThrow(
        'Division by zero :('
      );
    });
  });
});
