const pending = (req, res) => {
  console.log('esto es pending', req.query);
  res.redirect(`https://frontsportzone.onrender.com/?status=${status}`);
  // res.redirect('http://localhost:5173');
  // res.redirect("http://localhost:ruta_a_crear")
  res.send('Pago pendiente');
};

module.exports = pending;
