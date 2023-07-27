const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favoritos",
    {
      idFavorites: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_inventory: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comentarios: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );
};
