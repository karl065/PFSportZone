import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useDispatch} from 'react-redux';
import {createCategory} from '../../../redux/actions/actions';
import * as Yup from 'yup';
import styles from './CategoryCreation.module.css';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const initialValues = {
  categoryName: '',
  description: '',
};

export const CategoryCreation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    categoryName: Yup.string()
      .required('Requerido')
      .min(2, 'Muy corto!. Al menos 2 caracteres.')
      .max(80, 'Muy largo!. No mas de 80 caracteres.')
      .test('has-3-letters', 'Debe contener al menos 3 letras', (value) =>
        /^(.*[a-zA-Z].*){3,}$/.test(value)
      ),
    description: Yup.string()
      .required('Descripción requerida')
      .min(20, 'Muy corto!. Al menos 20 caracteres')
      .max(10000, 'Muy largo!. No mas de 10000 caracteres.'),
  });

  const handleSubmit = (values, {resetForm}) => {
    try {
      dispatch(
        createCategory({
          ...values,
          status: true,
        })
      ).then(() => {
        Swal.fire('Buen trabajo!', 'Categoría creada!', 'success');
        resetForm();
        navigate('/adminProducts');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error creando la categoría. Intente nuevamente.',
      });
    }
  };

  return (
    <div className={styles.form_wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({errors}) => (
          <Form className={styles.form}>
            <h1 className={styles.title}>Nueva Categoria</h1>
            <div className={styles.field_container}>
              <label>Nombre</label>
              <div className={styles.input_box}>
                <Field
                  name="categoryName"
                  placeholder="Nombre Categoria"
                  className={styles.input}
                />
                <ErrorMessage
                  name="categoryName"
                  component="span"
                  className={styles.error}
                />
              </div>
            </div>
            <div className={styles.field_container}>
              <label>Descripción</label>
              <div className={styles.input_box}>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Descripción de la categoria"
                  className={styles.input}
                  rows="4"
                />
                <ErrorMessage
                  name="description"
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
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CategoryCreation;
