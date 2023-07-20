const {
  deletePersonDb,
} = require("../../Controllers/ControllersPersons/DelPersonsControllers.js");

const deletePersonHandler = async (req, res) => {
  const id_persons = req.params.id;

  try {
    const result = await deletePersonDb(id_persons);
    if (result.error) {
      return res.status(404).json({ error: result.error });
    } else {
      return res.status(200).json({ success: result.success });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocurrió un error interno en el servidor." });
  }
};

module.exports = { deletePersonHandler };
