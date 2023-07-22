const { Usuarios } = require("../../../DB");

const filterUsersControllers = async (role, userStatus) => {
  if (role !== undefined) {
    return await Usuarios.findAll({ where: { role: role } });
  } else if (userStatus !== undefined) {
    return await Usuarios.findAll({ where: { userStatus: userStatus } });
  }
};

module.exports = { filterUsersControllers };
