const failure = (req, res) => {
  // console.log(req.query);
  res.redirect('https://frontsportzone.onrender.com/cart');
  // res.redirect("http://localhost:ruta_a_crear")
  res.send('Pago fallido');
};

module.exports = failure;
