const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Carrito',
    {
      idCar: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      total: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
