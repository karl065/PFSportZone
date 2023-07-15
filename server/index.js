/* Este código importa el módulo `servidor` del archivo `./src/server` y lo asigna a la constante
`servidor`. Luego establece la constante `PORT` en 3000. Finalmente, inicia el servidor llamando al
método `listen` en el objeto `server`, pasando la constante `PORT` y una función de devolución de
llamada que registra un mensaje en la consola cuando el servidor comienza a escuchar en el puerto
especificado. */

const server = require('./src/server');
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
