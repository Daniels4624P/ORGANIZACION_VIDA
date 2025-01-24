const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class TareasService {
    async obtenerUnaTarea(id) {
        const tarea = await models.Tareas.findByPk(id)
        if (!tarea) {
            throw boom.notFound('No se encontro la Tarea que buscas')
        }
        return tarea
    }

    async crearUnaTarea(tarea) {
        const nuevaTarea = await models.Tareas.create(tarea)
        if (!nuevaTarea) {
            throw boom.notFound('No se pudo crear la tarea')
        }
        return {message: 'Se creo la tarea correctamente', nuevaTarea}
    }
    
    async actualizarTarea(id, changes) {
        const tarea = await models.Tareas.findByPk(id)
        if (!tarea) {
            throw boom.notFound('No se encontro la tarea que buscas')
        }
        await tarea.update(changes)
        return {message: 'Se actualizo correctamente'}
    }

    async eliminarTarea(id) {
        const tarea = await models.Tareas.findByPk(id)
        if (!tarea) {
            throw boom.notFound('No se encontro la tarea que buscas')
        }
        await tarea.destroy()
        return {message: 'Se elimino correctamente'}
    }
}

module.exports = TareasService