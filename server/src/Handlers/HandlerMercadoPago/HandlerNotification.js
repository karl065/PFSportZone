const notification = async (req, res) => {
  console.log('esto es notificacion', req.body);
  res.send('Procesando pago...');
};

module.exports = notification;
