/* Este código está definiendo un modelo Sequelize para una tabla llamada "Ventas" en una base de
datos. */
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ventas",
    {
      id_sales: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      receipt_code: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      tax: {
        type: DataTypes.FLOAT,
      },
      total_amount: {
        type: DataTypes.FLOAT,
      },
      status: {
        type: DataTypes.ENUM("Pending", "In Progress", "Rejected", "Paid"),
      },
    },
    {
      timestamps: false,
    }
  );
};
