const {
  deletePersonDb,
} = require('../../Controllers/ControllersPersons/DelPersonsControllers.js');

const deletePersonHandler = async (req, res) => {
  const {id} = req.params;

  try {
    const result = await deletePersonDb(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

module.exports = {deletePersonHandler};
