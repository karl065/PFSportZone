const {
  createUserDb,
} = require('../../Controllers/ControllersUsers/postUserController');

const postUserDbHandler = async (req, res) => {
  const {email, user, password, role, userStatus} = req.body;
  if (!email || !user || !password) {
    return res.status(404).send('Los campos no deben estar vacíos...!');
  }
  try {
    const dataUser = await createUserDb(
      email,
      user,
      password,
      role,
      userStatus
    );
    return res.status(201).json(dataUser);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {postUserDbHandler};
