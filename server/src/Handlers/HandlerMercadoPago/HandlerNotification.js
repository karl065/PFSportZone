const notification = async (req, res) => {
  console.log(req.query);
  const paymentStatus = req.query.status;
  console.log(paymentStatus);
  res.send('Procesando pago...');
};

module.exports = notification;
