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


  });

  // const handleDeleteImage = (images, imgUrl, setFieldValue) => {
  //   const filteredUrls = images.filter((image) => image !== imgUrl);
  //   setFieldValue('image', filteredUrls);
  // };

  const handleSubmit = async (values) => {
    try {
      
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
          // address: user?.address || '',
          // role: user?.role || '',
         
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
              <div className={`${styles.input_container} ${styles.readOnly}`}>
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
              <div className={styles.input_container}>
                <label>Correo</label>

                <Field name="email" placeholder="Correo" />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={styles.error}
                />
              </div>

            </div>

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
