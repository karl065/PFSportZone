const mercadopago = require('mercadopago');
const {TOKEN_MERCADO} = process.env;
mercadopago.configure({
  access_token: TOKEN_MERCADO,
});
const crearOrdenController = async (Inventarios) => {
  try {
    const carritoItems = Inventarios.map((prod) => ({
      id: prod.id_inventory,
      title: prod.article_name,
      quantity: Number(prod.CarritoInventarios.cant),
      unit_price: Number(prod.CarritoInventarios.precioPorUnd),
      currency_id: 'COL',
      picture_url: prod.image[0],
      description: prod.description,
    }));

    const urlDev = {
      success: 'http://localhost:3000/mercadopago/success',
      failure: 'http://localhost:3000/mercadopago/failure',
      pending: 'http://localhost:3000/mercadopago/pending',
    };

    const deployUrls = {
      success: 'https://backsportzone.onrender.com/mercadopago/success',
      failure: 'https://backsportzone.onrender.com/mercadopago/failure',
      pending: 'https://backsportzone.onrender.com/mercadopago/pending',
    };

    const backUrls = {
      success: urlDev.success || deployUrls.success,
      failure: urlDev.failure || deployUrls.failure,
      pending: urlDev.pending || deployUrls.pending,
    };

    const notificationDev = 'http://localhost:3000/mercadopago/notification';
    const notificationDeploy =
      'https://backsportzone.onrender.com/notification';

    const notificationUrl = notificationDev || notificationDeploy;

    const preference = {
      items: carritoItems,
      back_urls: backUrls,
      notification_url: notificationUrl,
    };

    const response = await mercadopago.preferences.create(preference);
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {crearOrdenController};
