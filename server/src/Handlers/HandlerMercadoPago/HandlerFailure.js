const failure = (req, res) => {
  console.log('esto es fallido ', req.query);
  const {status} = req.query;
  // res.redirect('https://frontsportzone.onrender.com/cart');
  res.redirect(`http://localhost:5173/cart?status=${status}`);
  // res.redirect("http://localhost:ruta_a_crear")
  res.send('Pago fallido');
};

module.exports = failure;
