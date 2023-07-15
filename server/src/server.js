const express = require('express');
const router = require('./Routes');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

/* `server.use(morgan('dev'));` está configurando el middleware de Morgan en el servidor. Morgan es un
middleware de registro para Node.js que registra solicitudes HTTP en la consola. */
server.use(morgan('dev'));
/* `server.use(express.json());` está configurando el middleware para analizar datos JSON en el cuerpo
de la solicitud. */
server.use(express.json());
/* `server.use(cors());` está configurando el middleware CORS (Cross-Origin Resource Sharing) en el
servidor. CORS es un mecanismo que permite que los recursos de una página web se soliciten desde
otro dominio fuera del dominio desde el que se originó el recurso. */
server.use(cors());

/* `server.use(router);` está montando el middleware del enrutador en el servidor. Significa que
cualquier solicitud que coincida con las rutas definidas en el enrutador será manejada por el
middleware del enrutador. */
server.use(router);

module.exports = server;
