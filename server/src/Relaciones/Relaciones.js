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
    Carrito,
    IngresoProducto,
    Deportes,
    Marcas,
  } = models;

  Categorias.hasMany(Inventarios, {
    foreignKey: 'id_categories',
    as: 'inventarios',
  });
  Inventarios.belongsTo(Categorias, {
    foreignKey: 'id_categories',
    as: 'categorias',
  });

  Usuarios.belongsToMany(Inventarios, {
    through: 'Favoritos',
  });
  Inventarios.belongsToMany(Usuarios, {
    through: 'Favoritos',
  });

  Usuarios.hasMany(Ventas, {
    foreignKey: 'id_usuarios',
    as: 'usuarios',
  });
  Ventas.belongsTo(Usuarios, {
    foreignKey: 'id_usuarios',
    as: 'ventas',
  });

  Ventas.belongsToMany(Inventarios, {
    through: 'Detalle_Ventas',
  });
  Inventarios.belongsToMany(Ventas, {
    through: 'Detalle_Ventas',
  });

  Inventarios.belongsTo(Marcas, {
    foreignKey: 'idMarca',
    as: 'marcas',
  });
  Marcas.hasMany(Inventarios, {
    foreignKey: 'idMarca',
    as: 'inventarios',
  });
  Deportes.hasMany(Inventarios, {
    foreignKey: 'idDeportes',
    as: 'inventarios',
  });
  Inventarios.belongsTo(Deportes, {
    foreignKey: 'idDeportes',
    as: 'deportes',
  });

  Usuarios.hasOne(Carrito, {foreignKey: 'idUser', as: 'carrito'});
  Carrito.belongsTo(Usuarios, {foreignKey: 'idUser', as: 'usuario'});

  // Hook afterCreate para crear automáticamente un carrito con valores nulos para el usuario recién creado
  Usuarios.afterCreate(async (usuario, options) => {
    try {
      await Carrito.create({
        cantProd: 0,
        total: 0,
        idUser: usuario.idUser,
      });
    } catch (error) {
      console.error('Error al crear el carrito:', error);
    }
  });

  Carrito.belongsToMany(Inventarios, {
    through: {
      model: CarritoInventarios,
      unique: false,
      attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
    },
    foreignKey: 'idCar',
  });

  Inventarios.belongsToMany(Carrito, {
    through: {
      model: CarritoInventarios,
      unique: false,
      attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
    },
    foreignKey: 'id_inventory',
  });
  return {
    Personas,
    Usuarios,
    Inventarios,
    Categorias,
    Ventas,
    Favoritos,
    Pagos,
    Carrito,
    IngresoProducto,
    Marcas,
    Deportes,
  };
};
module.exports = {relaciones};
