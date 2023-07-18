const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Categorias",
    {
      id_categorias: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_categoria: {
        type: DataTypes.STRING(15),
      },
      descripcion: {
        type: DataTypes.STRING(50),
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
