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
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      assessment: {
        type: DataTypes.ENUM(
          "Deficiente",
          "Mala",
          "Aceptable",
          "Buena",
          "Exclente"
        ),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
