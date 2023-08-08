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
      message: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      like: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dislike: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      evaluation: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
