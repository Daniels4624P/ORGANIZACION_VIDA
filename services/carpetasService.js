const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class CarpetasService {
    async obtenerTodasLasCarpetas() {
        const response = await models.Carpetas.findAll({
            include: [{ association: 'tareas' }],
            order: [
                ['creado', 'ASC']
            ]
        })
        return response
    }

    async obtenerUnaCarpeta(id) {
        const carpeta = await models.Carpetas.findByPk(id, {
            include: [{association: 'tareas'}]
        })
        if (!carpeta) {
            throw boom.notFound('No se encontro la carpeta que buscas')
        }
        return carpeta
    }

    async crearUnaCarpeta(carpeta) {
        const nuevaCarpeta = await models.Carpetas.create(carpeta)
        if (!nuevaCarpeta) {
            throw boom.notFound('No se pudo crear la carpeta')
        }
        return {message: 'Se creo la carpeta correctamente', nuevaCarpeta}
    }
    
    async actualizarCarpeta(id, changes) {
        const carpeta = await models.Carpetas.findByPk(id)
        if (!carpeta) {
            throw boom.notFound('No se encontro la carpeta que buscas')
        }
        await carpeta.update(changes)
        return {message: 'Se actualizo correctamente'}
    }

    async eliminarCarpeta(id) {
        const carpeta = await models.Carpetas.findByPk(id)
        if (!carpeta) {
            throw boom.notFound('No se encontro la carpeta que buscas')
        }
        await carpeta.destroy()
        return {message: 'Se elimino correctamente'}
    }
}

module.exports = CarpetasService
