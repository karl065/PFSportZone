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
      quantity: prod.CarritoInventarios.cant,
      unit_price: prod.CarritoInventarios.precioPorUnd,
      currency_id: 'USD',
      picture_url: prod.image[0],
      description: prod.description,
    }));
    const preference = {
      items: carritoItems,
      back_urls: {
        success: '/mercadopago/success',
        failure: '/mercadopago/failure',
        pending: '/mercadopago/pending',
      },
      notification_url: '/mercadopago/notification',
    };

    const response = await mercadopago.preferences.create(preference);

    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {crearOrdenController};
