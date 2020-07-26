const PaymentService = require('../../services/PaymentService.js')
module.exports = {
  index(req, res) {
    res.json({ test: 'hello' })
    // req.body = 'hello'
  },
  async get(req, res) {
    console.log(req)
    const response = await PaymentService.getMonthPayment(req)
    res.json(response)
  },
  async create(req, res) {
    console.log(req, req.body)
    await PaymentService.createPayment(req)
    res.json({ test: 'hello' })
    // req.body = 'hello'
  }
}
