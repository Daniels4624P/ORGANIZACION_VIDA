const express = require('express')
const carpetasRouter = require('./carpetas')
const tareasRouter = require('./tareas')

const routerApi = (app) => {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/carpetas', carpetasRouter)
    router.use('/tareas', tareasRouter)
}

module.exports = routerApi