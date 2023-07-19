/* Este código está definiendo un modelo Sequelize para una tabla llamada "Usuarios" en una base de
datos. */
const {DataTypes} = require('sequelize');

/* El código que proporcionó está definiendo un modelo Sequelize para una tabla llamada "Usuarios" en
una base de datos. */
module.exports = (sequelize) => {
  sequelize.define(
    'Usuarios',
    {
      id_usuarios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roles: {
        type: DataTypes.ENUM('Admin', 'Cliente', 'Empleados'),
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
