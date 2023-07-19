const { Usuarios } = require("../../DB");
const bcryptjs = require("bcryptjs");

const createUserDb = async (email, user, password, role, userStatus) => {
  password = await bcryptjs.hash(password, 10);

  const newUser = await Usuarios.create({
    email,
    user,
    password,
    role,
    userStatus,
  });

  return newUser;
};

module.exports = { createUserDb };
