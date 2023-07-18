const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Inventarios",
    {
      id_inventarios: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      codigo_articulo: {
        type: DataTypes.STRING(20),
      },
      nombre_articulo: {
        type: DataTypes.STRING(20),
      },
      precio_venta: {
        type: DataTypes.FLOAT,
      },
      stock: {
        type: DataTypes.INTEGER(100),
      },
      descripcion: {
        type: DataTypes.STRING(50),
      },
      imagen: {
        type: DataTypes.STRING(20),
      },
      estado: {
        type: DataTypes.ENUM("Disponible", "No Disponible", "Descontinuado"),
      },
    },
    {
      timestamps: false,
    }
  );
};
