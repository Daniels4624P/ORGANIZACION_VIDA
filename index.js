const express = require('express')
const app = express()
const config = require('./config/config')
const cors = require('cors')
const routerApi = require('./routes/index')
const { errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler')

app.use(express.json())
app.use(cors())

routerApi(app)

app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(config.port, () => {
    console.log(`La API esta corriendo en el puerto ${config.port}`)
})