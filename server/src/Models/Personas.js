/* Este código define un modelo Sequelize para una tabla llamada "Personas" en una base de datos. */
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Personas",
    {
      id_personas: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
      },
      nombres: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.INTEGER,
      },
      direccion: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
