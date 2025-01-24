'use strict';

const { CARPETAS_TABLE, carpetasSchema } = require('./../models/carpetasModel')
const { TAREAS_TABLE, tareasSchema } = require('./../models/tareasModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CARPETAS_TABLE, carpetasSchema)
    await queryInterface.createTable(TAREAS_TABLE, tareasSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TAREAS_TABLE)
    await queryInterface.dropTable(CARPETAS_TABLE)
  }
};
