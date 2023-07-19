const {authenticatedUser} = require('../../auth/authenticatedUser');

const handlerAuthenticated = async (req, res) => {
  try {
    const {id} = req.user;
    const user = await authenticatedUser(id);
    return res.status(200).json({user});
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

module.exports = {handlerAuthenticated};
