const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Carrito",
    {
      id_Carrito: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cantidad_producto: {
        type: DataTypes.INTEGER,
      },
      monto_por_producto: {
        type: DataTypes.FLOAT,
      },
      cantidad_total_producto: {
        type: DataTypes.INTEGER,
      },
      monto_total_producto: {
        type: DataTypes.FLOAT,
      },
    },
    {
      timestamps: false,
    }
  );
};
