const nodemailer = require("nodemailer");
const { PSWMAILS } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "manuelf.borrego@gmail.com", // CREADO O REGISTRADO EN NODEMAILER
    pass: PSWMAILS,
  },
});

const enviarNotificacionUsuarioNuevo = async (email) => {
  const mensaje = {
    from: "manuelf.borrego@gmail.com",
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
    from: "manuelf.borrego@gmail.com",
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

const enviarNotificacionCompra = async (email, productos) => {
  if (!Array.isArray(productos)) {
    console.log('No se proporcionó una lista de productos válida.');
  }

  if (productos.length === 0) {
    console.log('No se han adquirido productos.');
  }

  const mensaje = {
    from: 'dianamtm55@gmail.com',
    to: email,
    subject: 'Confirmación de compra',
    text: `Gracias por tu compra. Has adquirido ${
      productos.length === 1 ? 'el artículo' : 'los artículos'
    }: ${productos.join(', ')}.`,
  };

  try {
    await transporter.sendMail(mensaje);
    return 'Compra Exitosa';
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  enviarNotificacionUsuarioNuevo,
  enviarNotificacionCambioContrasena,
  enviarNotificacionCompra,
};
