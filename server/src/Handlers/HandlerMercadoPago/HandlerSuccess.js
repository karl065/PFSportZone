const success = (req, res) => {
  // console.log(req.query);
  res.redirect('http://localhost:5173');
  // res.redirect("http://localhost:ruta_a_crear")
  res.send('Pago realizado');
};

module.exports = success;
