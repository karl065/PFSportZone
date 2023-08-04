const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Preguntas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_inventory: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Inventarios",
          key: "id_inventory",
        },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      response: {
        type: DataTypes.TEXT,
      },
      isAnswered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
