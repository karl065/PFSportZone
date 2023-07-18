const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Roles",
    {
      id_rol: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_rol: {
        type: DataTypes.STRING(15),
      },
      descripcion: {
        type: DataTypes.STRING(50),
      },
      estado: {
        type: DataTypes.ENUM("Activo", "Inactivo"),
      },
    },
    {
      timestamps: false,
    }
  );
};
