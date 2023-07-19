/* El código está importando varias funciones y objetos de diferentes archivos y módulos. */
const { Router } = require("express");
// const { prueba } = require("../../Handlers/PruebaHandler");
const {
  postUserDbHandler,
} = require("../../Handlers/RegValidUserHandler/postUserHandler");
const {
  getValidateUserPasswordHandler,
} = require("../../Handlers/RegValidUserHandler/getValidateUPHandler");

const userRouter = Router();

// userRouter.get("/", prueba);

/* La línea `userRouter.post("/registry", postUserDbHandler);` define una ruta para el método HTTP POST
en el extremo "/registry". Cuando se realiza una solicitud POST a este punto final, se ejecutará la
función `postUserDbHandler`. Esta función es responsable de manejar la lógica relacionada con la
creación de un nuevo usuario en la base de datos. */
userRouter.post("/registry", postUserDbHandler);

/* La línea `userRouter.get("/login", getValidateUserPasswordHandler);` define una ruta para el método
HTTP GET en el punto final "/login". Cuando se realiza una solicitud GET a este punto final,
ejecutará la función `getValidateUserPasswordHandler`. Esta función es responsable de manejar la
lógica relacionada con la validación de la contraseña de un usuario durante el proceso de inicio de
sesión. */
userRouter.get("/login", getValidateUserPasswordHandler);

module.exports = { userRouter };
