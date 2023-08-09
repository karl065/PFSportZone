const axios = require('axios');
const {
  getCarritoID,
} = require('../../Controllers/ControllersCarrito/getControllerCarrito');
const {enviarNotificacionPendiente} = require('../../Mail/Mail');
const {TOKEN_MERCADO} = process.env;

const pending = async (req, res) => {
  const {payment_id, status} = req.query;
  try {
    const {data} = await axios.get(
      `https://api.mercadopago.com/v1/payments/${payment_id}`,
      {
        headers: {
          Authorization: 'Bearer ' + TOKEN_MERCADO,
        },
      }
    );
    const {external_reference} = data;
    const {dataValues} = await getCarritoID(external_reference);
    const userEmail = dataValues.usuario.dataValues.email;
    const urlTicket = data.transaction_details.external_resource_url;
    console.log('esto es data trans: ', data.transaction_details);
    console.log('Esto es Ticket: ', urlTicket);
    enviarNotificacionPendiente(userEmail, urlTicket);

    const encodedUrlTicket = encodeURIComponent(urlTicket);

    // res.redirect(
    //   `http://localhost:5173/cart?status=${status}&&urlticket=${encodedUrlTicket}`
    // );
    res.redirect(
      `https://frontsportzone.onrender.com/cart?status=${status}&&urlticket=${encodedUrlTicket}`
    );
    // res.redirect("http://localhost:ruta_a_crear")
    // res.send('Pago pendiente');
  } catch (error) {
    // console.log(error);
    return res.status(500).json({error: error.message});
  }
};

module.exports = pending;
