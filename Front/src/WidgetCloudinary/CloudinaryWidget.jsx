/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import styles from "./CloudinaryWidget.module.css";

const MAX_IMAGES = 5;

const CloudinaryWidget = ({ fieldName, setFieldValue, images }) => {
  const cloudName = "dpjeltekx";
  const uploadPreset = "PFSportZone";
  const [uploadedImage, setUploadedImage] = useState([]);

  const handleUpload = async (event) => {
    // * Máximo 5 imágenes antes de seguir subiendo.
    if (images.length >= MAX_IMAGES) return;

    const file = event.target.files[0];

    try {
      // Preparar el formulario para subir la imagen con Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      // Realizar la solicitud POST a la API de Cloudinary
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      // El resultado de la solicitud contiene información sobre la imagen subida
      //   console.log('Imagen subida:', response.data);

      // Guardar el public_id y la URL de la imagen subida en el estado del componente
      setUploadedImage([
        ...uploadedImage,
        {
          publicId: response.data.public_id,
          secureUrl: response.data.secure_url,
          url: response.data.url,
        },
      ]);

      // * Guardo las url en un array y se la paso a los valores del formulario.
      setFieldValue(fieldName, [...images, response.data.url]);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };
  
  return (
    <div className={styles.container}>
      {/* Botón para seleccionar la imagen */}
      <label className={styles.label}>
        Seleccione una/varias imagene(-s)
        {/* Input de tipo "file" oculto */}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleUpload}
        />
      </label>
      <p>Max:{MAX_IMAGES}</p>
    </div>
  );
};

export default CloudinaryWidget;
