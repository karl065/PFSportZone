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
        type: DataTypes.ENUM("Natural", "Juridical"),
      },
      tipo_documento: {
        type: DataTypes.ENUM("CC", "CE", "PA", "NIT"),
      },
      num_documento: {
        type: DataTypes.INTEGER(15),
      },
      nombres: {
        type: DataTypes.STRING(25),
      },
      apellidos: {
        type: DataTypes.STRING(25),
      },
      telefono: {
        type: DataTypes.INTEGER(15),
      },
      email: {
        type: DataTypes.STRING(50),
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
