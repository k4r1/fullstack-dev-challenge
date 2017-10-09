let calculateInterest = (params) => {
  function* calculateBalance(o) {
    var balance = params.initialSavings;

    var interest = 0;

    for (let i = 0; i <= o.months; ++i) {
      /* Report the balance this month */
      yield {month: i, amount: isNaN(balance) ? 0 : balance};

      /* Make the deposit for next month */
      balance = balance + params.monthlySavings;

      /* Calculate the interest acrued for that month */
      interest += balance * (params.interestRate / 100) / 12;

      /* Check if interest should be paid out that month */
      if ((i + 1) % params.interestPeriod === 0) {
        balance = balance + interest;
        interest = 0;
      };
    }
  }

  return [...calculateBalance({months: params.months})];
}

module.exports = { calculateInterest };
