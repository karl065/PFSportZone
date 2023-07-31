const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reviews",
    {
      idReview: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_inventory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      assessment: {
        type: DataTypes.ENUM(
          "Deficiente",
          "Mala",
          "Aceptable",
          "Buena",
          "Exclente"
        ),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
