const nodemailer = require("nodemailer");
const { PSWMAILS } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "dianamtm55@gmail.com", // CREADO O REGISTRADO EN NODEMAILER
    pass: PSWMAILS,
  },
});

const enviarNotificacionUsuarioNuevo = async (email) => {
  const mensaje = {
    from: "dianamtm55@gmail.com",
    to: email,
    subject: "Bienvenido a nuestra aplicación",
    text: "¡Gracias por registrarte en nuestra aplicación! Esperamos que disfrutes tu experiencia.",
  };

  try {
    await transporter.sendMail(mensaje);
    console.log("Notificación de usuario nuevo enviada.");
  } catch (error) {
    console.error("Error al enviar la notificación de usuario nuevo:", error);
  }
};

const enviarNotificacionCambioContrasena = async (email) => {
  const mensaje = {
    from: "dianamtm55@gmail.com",
    to: email,
    subject: "Cambio de contraseña",
    text: "Tu contraseña ha sido cambiada exitosamente. Si no realizaste este cambio, contacta con nosotros.",
  };

  try {
    await transporter.sendMail(mensaje);
    console.log("Notificación de cambio de contraseña enviada.");
  } catch (error) {
    console.error(
      "Error al enviar la notificación de cambio de contraseña:",
      error
    );
  }
};

const enviarNotificacionCompra = async (email, article_name) => {
  const mensaje = {
    from: "dianamtm55@gmail.com",
    to: email,
    subject: "Confirmación de compra",
    text: `Gracias por tu compra. este es el articulo ${article_name}.`,
  };

  try {
    await transporter.sendMail(mensaje);
    return "Compra Exitosa";
  } catch (error) {
    return error.message;
  }
};

const enviarNotificacionCompraPendiente = async (email, article_name) => {
  const mensaje = {
    from: "dianamtm55@gmail.com",
    to: email,
    subject: "Compra pendiente",
    text: `Su compra se encuentra Pendiente de autorizacion ${article_name}.`,
  };

  try {
    await transporter.sendMail(mensaje);
    return "Compra pendiente";
  } catch (error) {
    return error.message;
  }
};

const enviarNotificacionCompraRechazada = async (email, article_name) => {
  const mensaje = {
    from: "dianamtm55@gmail.com",
    to: email,
    subject: "Compra rechazada",
    text: `Su compra fue rechazada ${article_name}.`,
  };

  try {
    await transporter.sendMail(mensaje);
    return "Compra rechazada";
  } catch (error) {
    return error.message;
  }
};

const enviarNotificacionArticulo = async (email, article_name, stock) => {
  const mensaje = {
    from: "dianamtm55@gmail.com",
    to: email,
    subject: "Articulo con poco stock",
    text: `El articulo ${article_name}, cuenta con solo ${stock} .`,
  };

  try {
    await transporter.sendMail(mensaje);
    return "Articulo notificado";
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  enviarNotificacionUsuarioNuevo,
  enviarNotificacionCambioContrasena,
  enviarNotificacionCompra,
  enviarNotificacionCompraPendiente,
  enviarNotificacionCompraRechazada,
  enviarNotificacionArticulo,
};
