const {
  postUser,
} = require('../../Controllers/ControllersUsers/postControllerUsers');

const postHandlerUsers = async (req, res) => {
  const {name, address, phone, email, password, role} = req.body;
  if ((!name, !email, !password, !role)) {
    return res.status(404).send('Los campos no deben estar vacíos');
  }
  try {
    const user = await postUser(name, address, phone, email, password, role);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {postHandlerUsers};
