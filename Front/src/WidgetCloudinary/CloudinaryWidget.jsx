/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect } from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import {useEffect, useState} from 'react';
import styles from './CloudinaryWidget.module.css';

const CloudinaryWidget = ({fieldName, setFieldValue}) => {
  const cloudName = 'dpjeltekx';
  const uploadPreset = 'PFSportZone';
  const [uploadedImage, setUploadedImage] = useState([]);
  const [dataImage, setDataImage] = useState([]);

  useEffect(() => {
    setFieldValue(fieldName, dataImage);
  }, [dataImage]);

  const handleUpload = async (event) => {
    // * Máximo 5 imágenes antes de seguir subiendo.
    if (dataImage.length >= 5) return;

    const file = event.target.files[0];

    try {
      // Preparar el formulario para subir la imagen con Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

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
      setDataImage([...dataImage, response.data.url]);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  const handleDeleteImage = (publicId) => {
    const updatedImages = uploadedImage.filter(
      (img) => img.publicId !== publicId
    );
    setUploadedImage(updatedImages);
    // * Filtrar las URLs eliminando la URL correspondiente al publicId
    const filteredUrls = dataImage.filter((url) => {
      const img = uploadedImage.find((img) => img.publicId === publicId);
      return url !== img?.url;
    });
    setDataImage(filteredUrls);
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
          style={{display: 'none'}}
          onChange={handleUpload}
        />
      </label>
      {/* Mostrar la imagen subida si existe */}
      <div className={styles.images_container}>
        {uploadedImage.length !== 0 &&
          uploadedImage.map((img, index) => (
            <div key={index} className={styles.image_box}>
              <Image
                cloudName={cloudName}
                publicId={img.publicId}
                width="128"
                height="128"
              />
              <button onClick={() => handleDeleteImage(img.publicId)}>X</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CloudinaryWidget;
