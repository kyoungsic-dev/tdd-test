const Calculator = require('../calculator.js');

describe('Calc', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(3);
    cal.add(5);
    expect(cal.value).toBe(8);
  });

  it('substracts', () => {
    cal.set(3);
    cal.subtract(5);
    expect(cal.value).toBe(-2);
  });

  it('multiplys', () => {
    cal.set(3);
    cal.multiply(5);
    expect(cal.value).toBe(15);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('divides', () => {
      cal.set(10);
      cal.divide(2);
      expect(cal.value).toBe(5);
    });
  });
});
