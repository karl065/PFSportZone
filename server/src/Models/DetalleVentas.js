const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DetalleVentas",
    {
      id_detalle_ventas: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      cantidad: {
        type: DataTypes.INTEGER(100),
      },
    },
    {
      timestamps: false,
    }
  );
};
