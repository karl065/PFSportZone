const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("IngresosProductos", {
    id_IngresosProductos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_articulo: {
      type: DataTypes.STRING,
    },
    precio_compra: {
      type: DataTypes.FLOAT,
    },
    cantidad_producto: {
      type: DataTypes.INTEGER,
    },
  });
};
