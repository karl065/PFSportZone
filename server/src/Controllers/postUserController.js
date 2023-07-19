const { Usuarios } = require("../DB");
const bcryptjs = require("bcrypt");

const createUserDb = async (name, address, phone, email, password, rol) => {
  const passwordHash = await bcryptjs.hash(password, 10);

  password = passwordHash;

  const newUser = await Usuarios.create({
    name,
    address,
    phone,
    email,
    password,
    rol,
  });

  return newUser;
};

module.exports = { createUserDb };
