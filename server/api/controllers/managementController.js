module.exports = {
  index(req, res) {
    console.log(req, res.body)
    res.json({ test: 'hello' })
    // req.body = 'hello'
  }
}
