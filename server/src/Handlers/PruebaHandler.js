/**
 * La función prueba es una función de JavaScript que envía la cadena 'Hola kevin' como respuesta.
 * @param req - El parámetro req es un objeto que representa la solicitud HTTP realizada por el
 * cliente. Contiene información como el método de solicitud, los encabezados, la URL y el cuerpo.
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar una respuesta al
 * cliente. En este caso, el método `res.send()` se usa para enviar la cadena "Hola kevin" como
 * respuesta.
 */
const prueba = (req, res) => {
  res.send('Hola kevin ');
};

module.exports = {prueba};
