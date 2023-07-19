const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Pagos",
    {
      id_pagos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Metodo_pago: {
        type: DataTypes.ENUM("Tarjeta", "PSE", "otros"),
      },
      fecha: {
        type: DataTypes.DATE,
      },
      monto: {
        type: DataTypes.FLOAT,
      },
    },
    {
      timestamps: false,
    }
  );
};
