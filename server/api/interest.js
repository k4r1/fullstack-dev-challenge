let calculateInterest = (params) => {
  function* calculateBalance(o) {
    var acc = params.initialSavings;
    for (let i = 1; i <= o.months; ++i) {
      acc = acc + params.monthlySavings;
      if (i % 12 === 0) {
        acc = acc * (1 + params.interestRate / 100);
      };

      yield {month: i, amount: isNaN(acc) ? 0 : acc};
    }
  }

  return [...calculateBalance({months: 24})];
}

module.exports = { calculateInterest };
