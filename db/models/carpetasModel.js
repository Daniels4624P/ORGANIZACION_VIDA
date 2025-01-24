const { DataTypes, Model } = require('sequelize')

const CARPETAS_TABLE = 'Carpetas'

const carpetasSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    creado: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'fecha_creacion',
        defaultValue: DataTypes.NOW
    }
}

class Carpetas extends Model {
    static associate(models) {
        this.hasMany(models.Tareas, { as: 'tareas', foreignKey: 'carpetaId' })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CARPETAS_TABLE,
            modelName: 'Carpetas',
            timestamps: false
        }
    }
}

module.exports = { Carpetas, carpetasSchema, CARPETAS_TABLE }