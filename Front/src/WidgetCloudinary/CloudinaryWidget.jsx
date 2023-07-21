/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect } from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import {useState} from 'react';

const CloudinaryWidget = () => {
  const cloudName = 'dpjeltekx';
  const uploadPreset = 'PFSportZone';
  const [uploadedImage, setUploadedImage] = useState([]);

  const handleUpload = async (event) => {
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
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  const handleDeleteImage = (publicId) => {
    const updatedImages = uploadedImage.filter(
      (img) => img.publicId !== publicId
    );
    setUploadedImage(updatedImages);
  };

  return (
    <div>
      {/* Botón para seleccionar la imagen */}
      <label
        style={{
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
        }}
      >
        Seleccionar Imagen
        {/* Input de tipo "file" oculto */}
        <input
          type="file"
          accept="image/*"
          style={{display: 'none'}}
          onChange={handleUpload}
        />
      </label>
      {/* Mostrar la imagen subida si existe */}
      {uploadedImage.length !== 0 &&
        uploadedImage.map((img, index) => (
          <div key={index}>
            <Image cloudName={cloudName} publicId={img.publicId} width="300" />
            <button onClick={() => handleDeleteImage(img.publicId)}>
              Eliminar
            </button>
          </div>
        ))}
    </div>
  );
};

export default CloudinaryWidget;
