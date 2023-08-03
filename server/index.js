/* Este código importa el módulo `servidor` del archivo `./src/server` y lo asigna a la constante
`servidor`. Luego establece la constante `PORT` en 3000. Finalmente, inicia el servidor llamando al
método `listen` en el objeto `server`, pasando la constante `PORT` y una función de devolución de
llamada que registra un mensaje en la consola cuando el servidor comienza a escuchar en el puerto
especificado */

const { conn } = require("./src/DB");
const { superUser } = require("./src/Root/Root");
const {
  inicializarDeportes,
} = require("./src/Controllers/ControllersDeportes/PostControllerDeportes.js");
const server = require("./src/server");
const PORT = 3000;

conn.sync().then(() => {
  server.listen(PORT, async () => {
    superUser();
    inicializarDeportes();
    console.log(`Corriendo en el puerto: ${PORT}`);
  });
});
