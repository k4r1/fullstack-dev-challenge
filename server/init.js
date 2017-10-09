const { calculateInterest } = require('./api/interest.js')

module.exports = (app) => {
  app.get('/api/projection', function(req, res) {
    let initialSavings = Number(req.query.initial)
    let monthlySavings = Number(req.query.monthly)
    let interestRate = Number(req.query.interest)

    let d = calculateInterest({initialSavings, monthlySavings, interestRate})

    res.json(d)
  })
}
