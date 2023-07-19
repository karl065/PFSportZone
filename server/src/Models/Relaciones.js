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
  Personas.hasOne(Usuarios, { foreignKey: "id_personas" });
  Usuarios.belongsTo(Personas, { foreignKey: "id_personas" });

  // Relaciones entre Inventarios y Categorias
  Inventarios.belongsTo(Categorias, { foreignKey: "id_categorias" });
  Categorias.hasMany(Inventarios, { foreignKey: "id_categorias" });

  // Relaciones entre Usuarios y Ventas
  Usuarios.hasMany(Ventas, { foreignKey: "id_usuarios" });
  Ventas.belongsTo(Usuarios, { foreignKey: "id_usuarios" });

  // Relaciones entre Usuarios y Favoritos
  Usuarios.hasMany(Favoritos, { foreignKey: "id_usuarios" });
  Favoritos.belongsTo(Usuarios, { foreignKey: "id_usuarios" });

  // Relaciones entre Inventarios y Favoritos
  Inventarios.hasMany(Favoritos, { foreignKey: "id_inventarios" });
  Favoritos.belongsTo(Inventarios, { foreignKey: "id_inventarios" });

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
