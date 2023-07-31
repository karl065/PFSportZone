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
      .required('Required category name')
      .min(2, 'Too Short!. At leas 2 characters.')
      .max(80, 'Too Long!. No more than 80 characters.')
      .test('has-3-letters', 'Must contain at least 3 letters', (value) =>
        /^(.*[a-zA-Z].*){3,}$/.test(value)
      ),
    description: Yup.string()
      .required('Description required')
      .min(20, 'Too Short!. At least 20 characters')
      .max(10000, 'Too Long!. No more than 10000 characters.'),
  });

  const handleSubmit = (values, {resetForm}) => {
    try {
      dispatch(
        createCategory({
          ...values,
          status: true,
        })
      ).then(() => {
        Swal.fire('Good job!', 'Category created!', 'success');
        resetForm();
        navigate('/adminProducts');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fail creating a category. Please try again later.',
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
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CategoryCreation;
