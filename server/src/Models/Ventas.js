/* Este código está definiendo un modelo Sequelize para una tabla llamada "Ventas" en una base de
datos. */
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Ventas', {
    id_sales: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantProd: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'In Progress', 'Rejected', 'Paid'),
    },
  });
};
