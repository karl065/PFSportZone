/* Este código está definiendo un modelo Sequelize para una tabla llamada "Usuarios" en una base de
datos. */
const { DataTypes } = require("sequelize");

/* El código que proporcionó está definiendo un modelo Sequelize para una tabla llamada "Usuarios" en
una base de datos. */
module.exports = (sequelize) => {
  sequelize.define(
    "Usuarios",
    {
      id_usuarios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
<<<<<<< HEAD
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
=======
>>>>>>> 7b5029f18a2a7e901908d908d1c2641649393f8a
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
<<<<<<< HEAD
      role: {
        type: DataTypes.ENUM('Admin', 'Cliente', 'Empleado'),
=======
      roles: {
        type: DataTypes.ENUM("Admin", "Cliente", "Empleados"),
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
>>>>>>> 7b5029f18a2a7e901908d908d1c2641649393f8a
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
