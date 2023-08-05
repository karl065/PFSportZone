/* eslint-disable react/prop-types */
import {Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import styles from './EditUser.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { clearUserEd, editUser } from "../../../redux/actions/actions";
import { useEffect } from "react";
const EditUser = ({user, onSubmitSuccess}) => {
  const dispatch = useDispatch();
 // console.log(user);

 
  const SignupSchema = Yup.object().shape({
    idUser: Yup.number()
      .required('Busque un usuario para editar')
      .test('equal-to-product', 'Debe ser igual al id usuario', function (value) {
        return value === user.idUser;
      }),
    first_name: Yup.string()
      .required('Nombre de producto requerido')
      .min(2, 'Al menos 2 caracteres.')
      .max(80, 'Muy largo!. No mas de 80 caracteres.')
      .test('has-3-letters', 'Debe contener al menos 3 letras', (value) =>
        /^(.*[a-zA-Z].*){3,}$/.test(value)
      ),
      last_name: Yup.string()
      .required('Segundo nombre requerido')
      .min(2, 'Al menos 2 caracteres.')
      .max(80, 'Muy largo!. No mas de 80 caracteres.')
      .test('has-3-letters', 'Debe contener al menos 3 letras', (value) =>
      /^(.*[a-zA-Z].*){3,}$/.test(value)),
    email: Yup.string()
      .required('Mail requerido')
      .test('has-3-letters', 'Debe contener al menos 3 letras', (value) =>
      /^(.*[a-zA-Z@].*){3,}$/.test(value)),
    document_number: Yup.number()
      .integer('Debe ser un entero')
      .required('Documento requerido')
      .min(0, 'El documento debe ser positivo')
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    address: Yup.string()
      .required('Dirección requerida')
      .min(10, 'Muy corto!. Al menos 20 caracteres.')
      .max(1500, 'Muy largo!. No mas de 1500 caracteres.'),
    
   
  });

  // const handleDeleteImage = (images, imgUrl, setFieldValue) => {
  //   const filteredUrls = images.filter((image) => image !== imgUrl);
  //   setFieldValue('image', filteredUrls);
  // };

  const handleSubmit = async (values) => {
    try {
      console.log(values);
      await dispatch(editUser(values));
      Swal.fire('Buen trabajo!', 'Usuario editado correctamente!', 'success');
      onSubmitSuccess();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error actualizando el usuario. Intente nuevamente.',
      });
    }
  };

  // * Al desmontar el componente también se borra el producto si lo obtiene del redux.
  useEffect(() => {
    return () => {
      dispatch(clearUserEd());
    };
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          idUser: user?.idUser || '',
          first_name: user?.first_name || '',
          last_name: user?.last_name || '',
          email: user?.email || '',
          document_number: user?.document_number || '',
          document_type: user?.document_type || [],
          address: user?.address || '',
          role: user?.role || '',
         
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
        enableReinitialize
      >
        {({errors, values, setFieldValue, resetForm}) => (
          <Form className={styles.form}>
            <div className={styles.all_inputs_container}>
              <div className={`${styles.input_container} ${styles.readOnly}`}>
                <label className={styles.label_code}>
                  Codigo [Solo Lectura]
                </label>
                <Field
                  name="idUser"
                  placeholder="ID Usuario"
                  readOnly
                />
                <ErrorMessage
                  name="idUser"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.input_container}>
                <label>Nombre</label>
                <Field name="first_name" placeholder="Nombres" />
                <ErrorMessage
                  name="first_name"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.input_container}>
                <label>Apellidos</label>

                <Field name="last_name" placeholder="Apellidos" />
                <ErrorMessage
                  name="last_name"
                  component="span"
                  className={styles.error}
                />
              </div>

              

              {/* <div className={styles.input_container}>
                <label># Documento</label>

                <Field name="document_number" placeholder="document_number" />
                <ErrorMessage
                  name="document_number"
                  component="span"
                  className={styles.error}
                />
              </div> */}

              {/* <div className={styles.input_container}>
                <label>Dirección</label>
                <Field
                  as="textarea"
                  name="address"
                  placeholder="Dirección"
                  rows="4"
                />
                <ErrorMessage
                  name="address"
                  component="span"
                  className={styles.error}
                />
              </div> */}
            </div>
            
            <div className={styles.selects_container}>
            <div className={`${styles.input_container} ${styles.readOnly}`}>
                <label className={styles.label_code}>
                 # Documento [Solo Lectura]
                </label>
                <Field
                  name="document_number"
                  placeholder="# de documento"
                  readOnly
                />
                <ErrorMessage
                  name="document_number"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles.input_container}>
                <label>Tipo Documento</label>
                <Field
                  name="document_type"
                  placeholder="Tipo Documento"
                  readOnly
                />
                <ErrorMessage
                  name="document_type"
                  component="span"
                  className={styles.error}
                />
              </div>

              {/* <div className={styles.input_container}>
                <label>Marca</label>
                <Field as="select" name="idMarca">
                  <option value="">Seleccione una marca</option>
                  {marcas.map((marca, index) => (
                    <option value={marca.idMarca} key={index}>
                      {marca.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="idMarca"
                  component="span"
                  className={styles.error}
                />
              </div> */}
              <div className={styles.input_container}>
                <label>Correo</label>

                <Field name="email" placeholder="Correo" />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={styles.error}
                />
              </div>

              {/* <div className={styles.input_container}>
                <label>Deporte</label>
                <Field as="select" name="idDeportes">
                  <option value="">Seleccione un deporte</option>
                  {sports.map((sport, index) => (
                    <option value={sport.idDeportes} key={index}>
                      {sport.deporteName}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="idDeportes"
                  component="span"
                  className={styles.error}
                />
              </div> */}

              {/* <div className={styles.input_container}>
                <label>Genero</label>
                <Field as="select" name="genre">
                  <option value="">Seleccione un genero</option>
                  {genero.map((gen, index) => (
                    <option value={gen} key={index}>
                      {gen}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="genre"
                  component="span"
                  className={styles.error}
                />
              </div> */}

              {/* {user && Object.keys(user).length ? (
                <div className={styles.cloudinary_field}>
                  <div>
                    <CloudinaryWidget
                      fieldName="image"
                      setFieldValue={setFieldValue}
                      images={values.image}
                    />
                    {errors.image && (
                      <span className={styles.error}>{errors.image}</span>
                    )}
                  </div>
                  <div className={styles.images_container}>
                    {values.image &&
                      values.image.map((image, index) => (
                        <div key={index} className={styles.image_box}>
                          <img src={image} alt="Product image" />
                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteImage(
                                values.image,
                                image,
                                setFieldValue
                              )
                            }
                          >
                            X
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              ) : null} */}
            </div>

            {/* <button
              type="button"
              className={styles.btnReset}
              onClick={resetForm}
            >
              Reiniciar valores del producto
            </button> */}
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={Object.keys(errors).length > 0}
            >
              Actualizar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditUser;
