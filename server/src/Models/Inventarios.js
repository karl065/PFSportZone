/* Este código está definiendo un modelo Sequelize para la tabla "Inventarios" en una base de datos. */
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Inventarios",
    {
      id_inventory: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      article_name: {
        type: DataTypes.STRING,
      },
      selling_price: {
        type: DataTypes.FLOAT,
      },
      purchase_price: {
        type: DataTypes.FLOAT,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      genre: {
        type: DataTypes.ENUM("Man", "Women", "Unisex"),
      },
      stage: {
        type: DataTypes.ENUM("Children", "Adults"),
      },
      status: {
        type: DataTypes.ENUM("Available", "Not Available", "Discontinued"),
      },
    },
    {
      timestamps: false,
    }
  );
};
