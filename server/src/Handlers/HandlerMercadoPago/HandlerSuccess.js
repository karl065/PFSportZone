const axios = require('axios');
const {
  getInventariosById,
} = require('../../Controllers/ControllersInventarios/GetInventariosControllers');
const {
  actualizarArticulo,
} = require('../../Controllers/ControllersInventarios/PutInventariosControllers');
const {
  getCarritoID,
} = require('../../Controllers/ControllersCarrito/getControllerCarrito');
const {
  crearVenta,
} = require('../../Controllers/ControllersVentas/PostControllersVentas');
const {
  delAllCarrito,
} = require('../../Controllers/ControllersCarrito/deleteControllerCarrito');

const {TOKEN_MERCADO} = process.env;

const success = async (req, res) => {
  const {payment_id} = req.query;
  try {
    const {data} = await axios.get(
      `https://api.mercadopago.com/v1/payments/${payment_id}`,
      {
        headers: {
          Authorization: 'Bearer ' + TOKEN_MERCADO,
        },
      }
    );
    console.log(data);
    const {external_reference} = data;
    const {items} = data.additional_info;
    for (const prod of items) {
      const {stock} = await getInventariosById(prod.id);
      const newStock = stock - prod.quantity;
      await actualizarArticulo(prod.id, {stock: newStock});
    }
    const {cantProd, total, idUser, Inventarios} = await getCarritoID(
      external_reference
    );
    const status = 'Paid';
    const {dataValues} = await crearVenta(
      status,
      cantProd,
      total,
      idUser,
      Inventarios
    );
    await delAllCarrito(external_reference);

    // res.redirect(`https://frontsportzone.onrender.com/detalleCompra?id=${dataValues.id_sales}&&status=${status}`);
    res.redirect(
      `http://localhost:5173/detalleCompra?id=${dataValues.id_sales}&&status=${status}`
    );
    // res.send('Pago realizado');
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = success;
