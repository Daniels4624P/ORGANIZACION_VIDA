const { DataTypes, Model } = require('sequelize')

const TAREAS_TABLE = 'Tareas'

const tareasSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    carpetaId: {
        allowNull: false,
        field: 'carpeta_id',
        type: DataTypes.INTEGER,
        references: {
            model: 'Carpetas', // Nombre de la tabla `carpetas`
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.STRING
    },
    creado: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'fecha_creacion'
    },
    completada: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class Tareas extends Model {
    static associate(models) {
        this.belongsTo(models.Carpetas, { as: 'carpetas', foreignKey: 'carpetaId' })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TAREAS_TABLE,
            modelName: 'Tareas',
            timestamps: false
        }
    }
}

module.exports = { Tareas, tareasSchema, TAREAS_TABLE }