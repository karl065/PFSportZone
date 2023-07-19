/* Este código define un modelo Sequelize para una tabla llamada "Personas" en una base de datos. */
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Personas",
    {
      id_persons: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      person_type: {
        type: DataTypes.ENUM("Natural", "Juridical"),
      },
      document_type: {
        type: DataTypes.ENUM("CC", "CE", "PA", "NIT"),
      },
      document_number: {
        type: DataTypes.INTEGER,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
