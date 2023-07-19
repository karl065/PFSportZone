/* Este código está definiendo un modelo Sequelize para la tabla "Inventarios" en una base de datos. */
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Inventarios",
    {
      id_inventarios: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nombre_articulo: {
        type: DataTypes.STRING,
      },
      precio_venta: {
        type: DataTypes.FLOAT,
      },
      precio_compra: {
        type: DataTypes.FLOAT,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      imagen: {
        type: DataTypes.STRING,
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
