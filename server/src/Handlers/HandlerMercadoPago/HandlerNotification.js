const notification = async (req, res) => {
  console.log('esto es notificacion', req.query);
  res.send('Procesando pago...');
};

module.exports = notification;
