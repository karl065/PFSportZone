const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "dianamtm55@gmail.com",
    pass: "pmssnqwcimecbndn",
  },
});

async function enviarNotificacionUsuarioNuevo(email) {
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
}

async function enviarNotificacionCambioContrasena(email) {
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

  //   async function enviarNotificacionCompra(email, article_name) {
  //     const mensaje = {
  //       from: "dianamtm55@gmail.com",
  //       to: email,
  //       subject: "Confirmación de compra",
  //       text: `Gracias por tu compra. Has adquirido el artículo: ${article_name}.`,
  //     };

  //     try {
  //       await transporter.sendMail(mensaje);
  //       console.log("Notificación de compra enviada.");
  //     } catch (error) {
  //       console.error("Error al enviar la notificación de compra:", error);
  //     }
  //   }
}
module.exports = {
  enviarNotificacionUsuarioNuevo,
  enviarNotificacionCambioContrasena,
};
