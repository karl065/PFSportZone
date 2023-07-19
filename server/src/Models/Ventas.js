/* Este código está definiendo un modelo Sequelize para una tabla llamada "Ventas" en una base de
datos. */
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ventas",
    {
      id_ventas: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuarios: {
        type: DataTypes.INTEGER(10),
        references: {
          model: Usuarios,
          key: "id_usuarios",
        },
      },
      codigo_comprobante: {
        type: DataTypes.STRING(20),
      },
      fecha: {
        type: DataTypes.DATE,
      },
      impuesto: {
        type: DataTypes.FLOAT,
      },
      total: {
        type: DataTypes.FLOAT,
      },
      estado: {
        type: DataTypes.ENUM("Pendiente", "En Proceso", "Rechazado", "Pagado"),
      },
    },
    {
      timestamps: false,
    }
  );
};
