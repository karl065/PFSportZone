const {
  createUserDb,
} = require("../../Controllers/RegValidUserControllers/postUserController");

const postUserDbHandler = async (req, res) => {
  const { name, address, phone, email, password, role } = req.body;

  try {
    const response = await createUserDb(
      name,
      address,
      phone,
      email,
      password,
      role
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postUserDbHandler };
