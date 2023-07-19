// Archivo: relaciones.js
/**
 * La función `relaciones` establece relaciones entre diferentes modelos en una aplicación JavaScript.
 * @param models - El parámetro `models` es un objeto que contiene referencias a los diferentes modelos
 * en su aplicación. Cada modelo representa una tabla en su base de datos.
 * @returns The function `relaciones` returns an object that contains references to the models
 * `Personas`, `Usuarios`, `Inventarios`, `Categorias`, `Ventas`, `Favoritos`, and `Pagos`.
 */
const relaciones = (models) => {
  const {
    Personas,
    Usuarios,
    Inventarios,
    Categorias,
    Ventas,
    Favoritos,
    Pagos,
    CarritoVentas,
    IngresoProducto,
  } = models;

  // Relaciones entre Personas y Usuarios
  Personas.hasOne(Usuarios, { foreignKey: "id_persons" });
  Usuarios.belongsTo(Personas, { foreignKey: "id_persons" });

  // Relaciones entre Inventarios y Categorias
  Inventarios.belongsTo(Categorias, { foreignKey: "id_categories" });
  Categorias.hasMany(Inventarios, { foreignKey: "id_categories" });

  // Relaciones entre Usuarios y Ventas
  Usuarios.hasMany(Ventas, { foreignKey: "idUser" });
  Ventas.belongsTo(Usuarios, { foreignKey: "idUser" });

  // Relaciones entre Usuarios y Favoritos
  Usuarios.hasMany(Favoritos, { foreignKey: "idUser" });
  Favoritos.belongsTo(Usuarios, { foreignKey: "idUser" });

  // Relaciones entre Inventarios y Favoritos
  Inventarios.hasMany(Favoritos, { foreignKey: "id_inventory" });
  Favoritos.belongsTo(Inventarios, { foreignKey: "id_inventory" });

  return {
    Personas,
    Usuarios,
    Inventarios,
    Categorias,
    Ventas,
    Favoritos,
    Pagos,
    CarritoVentas,
    IngresoProducto,
  };
};
module.exports = { relaciones };
