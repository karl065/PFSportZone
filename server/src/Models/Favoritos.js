const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Favoritos',
    {
      idFavorites: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
