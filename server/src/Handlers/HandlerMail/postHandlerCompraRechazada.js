const { enviarNotificacionCompraRechazada } = require("../../Mail/Mail.js");

const postHandlerCompraRechazada = async (req, res) => {
  const { email, article_name } = req.body;
  try {
    const compra = await enviarNotificacionCompraRechazada(email, article_name);
    return res.status(200).json(compra);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postHandlerCompraRechazada,
};
