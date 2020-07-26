const bodyParser = require('body-parser')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const route = require('./api/routes/index')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PUT, POST, DELETE, OPTIONS'
    )
    next()
  })

  app.use('/api', route)
  app.use(nuxt.render)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
