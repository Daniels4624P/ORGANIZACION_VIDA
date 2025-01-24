const { Tareas, tareasSchema } = require('./tareasModel')
const { Carpetas, carpetasSchema } = require('./carpetasModel')

const setupModels = (sequelize) => {
    Tareas.init(tareasSchema, Tareas.config(sequelize))
    Carpetas.init(carpetasSchema, Carpetas.config(sequelize))

    Carpetas.associate(sequelize.models)
    Tareas.associate(sequelize.models)
}

module.exports = setupModels