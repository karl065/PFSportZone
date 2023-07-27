/* La línea `const { Usuarios } = require("../../../DB");` está importando el objeto `Usuarios` desde
el módulo `../../../DB`. Es probable que el objeto `Usuarios` represente un modelo o una tabla de
base de datos para los usuarios. Al importarlo, el código puede acceder e interactuar con el modelo
o tabla `Usuarios` en el resto del código. */
const {Usuarios} = require('../../../DB');

/**
 * La función filtra a los usuarios según su función o estado de usuario.
 * @param role - El parámetro de rol se usa para filtrar usuarios según su rol. Es opcional y puede ser
 * cualquier valor que represente el rol de un usuario, como "administrador", "usuario" o "invitado".
 * @param userStatus - El parámetro userStatus se usa para filtrar usuarios según su estado. Es un
 * parámetro opcional que se puede utilizar para recuperar usuarios con un estado específico.
 * @returns La función `filterUsersControllers` devuelve una promesa que se resuelve en una matriz de
 * objetos de usuario. La matriz contiene usuarios que coinciden con el rol especificado o los
 * criterios de estado de usuario.
 */
const filterUsersControllers = async (role, userStatus) => {
  try {
    const whereConditions = {};
    if (role) {
      whereConditions.role = role;
    }
    if (userStatus) {
      whereConditions.userStatus = userStatus;
    }
    const userFilters = await Usuarios.findAll({where: whereConditions});
    return userFilters;
  } catch (error) {
    return error.message;
  }
};

module.exports = {filterUsersControllers};
