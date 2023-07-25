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
    Deportes,
  } = models;

  Categorias.hasMany(Inventarios, {
    foreignKey: 'id_categories',
    as: 'inventarios',
  });
  Inventarios.belongsTo(Categorias, {
    foreignKey: 'id_categories',
    as: 'categorias',
  });
  Deportes.hasMany(Inventarios, {
    foreignKey: 'idDeportes',
    as: 'inventarios',
  });
  Inventarios.belongsTo(Deportes, {
    foreignKey: 'idDeportes',
    as: 'deportes',
  });

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
module.exports = {relaciones};
