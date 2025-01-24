const { Sequelize } = require('sequelize')
const config = require('./../config/config')
const setupModels = require('./../db/models/index')
const URI = config.uri

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
    dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Evita rechazar certificados no autorizados (opcional)
    },
  },
})

setupModels(sequelize)

module.exports = sequelize
