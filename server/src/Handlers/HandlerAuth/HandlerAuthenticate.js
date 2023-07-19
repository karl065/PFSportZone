const {authenticateUser} = require('../../auth/authenticateUser');

const handlerAuthenticate = async (req, res) => {
  const {email, password} = req.body;
  try {
    const token = await authenticateUser(email, password);
    res.status(200).json({token});
  } catch (error) {
    res.status(400).json({error: error});
  }
};

module.exports = {handlerAuthenticate};
