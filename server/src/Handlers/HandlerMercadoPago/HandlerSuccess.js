const success = (req, res) => {
  console.log('esto es success', req.query);
  const {status} = req.query;
  res.redirect(`https://backsportzone.onrender.com/?status=${status}`);
  // res.redirect(`http://localhost:5173/?status=${status}`);
  // res.redirect("http://localhost:ruta_a_crear")
  res.send('Pago realizado');
};

module.exports = success;
