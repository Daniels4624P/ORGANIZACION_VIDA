const express = require('express')
const router = express.Router()
const carpetasService = require('./../services/carpetasService')
const service = new carpetasService()

router.get('/', async (req, res, next) => {
    try {
        const response = await service.obtenerTodasLasCarpetas()
        res.json(response)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const carpeta = await service.obtenerUnaCarpeta(id)
        res.json(carpeta)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const body = req.body
        const response = await service.crearUnaCarpeta(body)
        res.status(201).json(response)
    } catch (err) {
        next(err)
    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        const response = await service.actualizarCarpeta(id, body)
        res.json(response)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const carpeta = await service.eliminarCarpeta(id)
        res.json(carpeta)
    } catch (err) {
        next(err)
    }
})

module.exports = router