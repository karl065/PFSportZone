const {
  putUser,
} = require('../../Controllers/ControllersUsers/putControllersUsers');
const bcryptjs = require('bcryptjs');
const {enviarNotificacionCambioContrasena} = require('../../Mail/Mail');

const putHandlerUser = async (req, res) => {
  const {id} = req.params;
  const {
    email,
    user,
    password,
    role,
    userStatus,
    person_type,
    document_type,
    document_number,
    first_name,
    last_name,
    phone,
    address,
  } = req.body;
  console.log(password);
  let passwordHash;
  if (password) {
    passwordHash = await bcryptjs.hash(password, 10);
  }

  try {
    const userData = {
      ...(email !== undefined && {email}),
      ...(user !== undefined && {user}),
      ...(password !== undefined && {password: passwordHash}),
      ...(role !== undefined && {role}),
      ...(userStatus !== undefined && {userStatus}),
      ...(person_type !== undefined && {person_type}),
      ...(document_type !== undefined && {document_type}),
      ...(document_number !== undefined && {document_number}),
      ...(first_name !== undefined && {first_name}),
      ...(last_name !== undefined && {last_name}),
      ...(phone !== undefined && {phone}),
      ...(address !== undefined && {address}),
    };

    // Actualiza los datos del usuario en la base de datos
    const userUpdate = await putUser(userData, id);

    // Si se proporcionó una nueva contraseña, envía la notificación de cambio de contraseña
    if (password) {
      await enviarNotificacionCambioContrasena(userUpdate.email);
      console.log('Notificación de cambio de contraseña enviada.');
    }

    return res.status(200).json(userUpdate);
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

module.exports = {putHandlerUser};
