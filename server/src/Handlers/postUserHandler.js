const { createUserDb } = require("../Controllers/postUserController");

const postUserDbHandler = async (req, res) => {
  const { name, address, phone, email, password, rol } = req.body;

  try {
    const response = await createUserDb(
      name,
      address,
      phone,
      email,
      password,
      rol
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postUserDbHandler };
