const failure = (req, res) => {
  console.log('esto es fallido ', req.query);
  res.redirect('https://frontsportzone.onrender.com/cart');
  // res.redirect('http://localhost:5173/cart');
  // res.redirect("http://localhost:ruta_a_crear")
  res.send('Pago fallido');
};

module.exports = failure;
