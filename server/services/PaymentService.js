const db = require('../models')
module.exports = {
  async getMonthPayment(request) {
    const month = request.query.month
    const response = {
      status: 'error'
    }
    if (!month) return response
    const data = await db.payment
      .findAll({
        where: {
          month
        }
      })
      .then(function(payment) {
        console.log(payment)
        const response = {
          status: 'success',
          payment
        }
        return response
      })
    return data
  },
  async createPayment(request) {
    // { month: '', price: '90000', content: 'ああああ' }
    const data = await db.payment.create(request.body)
    console.log(data, request.body)
  }
}
