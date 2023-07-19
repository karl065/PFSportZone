/* Este código define un modelo Sequelize para una tabla llamada "Personas" en una base de datos. */
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Personas",
    {
      id_personas: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      tipo_persona: {
        type: DataTypes.ENUM("Natural", "Juridica"),
      },
      tipo_documento: {
        type: DataTypes.ENUM("CC", "CE", "PA", "NIT"),
      },
      num_documento: {
        type: DataTypes.INTEGER(15),
      },
      nombres: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      apellidos: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      telefono: {
        type: DataTypes.INTEGER(15),
      },
      direccion: {
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
    }
  );
};
