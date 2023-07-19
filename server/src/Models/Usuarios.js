/* Este código está definiendo un modelo Sequelize para una tabla llamada "Usuarios" en una base de
datos. */
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Usuarios",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [5, 50],
            msg: "The name must contain between 5 and 50 characters",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [5, 100],
            msg: "The address must contain between 5 and 100 characters",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "It must be a valid email...!!!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("Admin", "Customer", "Employee"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
