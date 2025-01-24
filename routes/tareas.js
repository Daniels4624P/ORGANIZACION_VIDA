const express = require('express')
const router = express.Router()
const tareasService = require('./../services/tareasService')
const service = new tareasService()

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const tarea = await service.obtenerUnaTarea(id)
        res.json(tarea)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const body = req.body
        const response = await service.crearUnaTarea(body)
        res.status(201).json(response)
    } catch (err) {
        next(err)
    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        const response = await service.actualizarTarea(id, body)
        res.json(response)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const carpeta = await service.eliminarTarea(id)
        res.json(carpeta)
    } catch (err) {
        next(err)
    }
})

module.exports = router