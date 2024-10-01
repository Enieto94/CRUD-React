// Sequelize.define}
import db_agendas from "../database/db_agendas.js";
// Importamos la conexión a db
import { DataTypes } from "sequelize";

const AgendaModel = db_agendas.define('agendas', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    servicio: { type: DataTypes.INTEGER },
    manicurista: { type: DataTypes.INTEGER },
    fecha_hora: { type: DataTypes.DATE },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
})

export default AgendaModel