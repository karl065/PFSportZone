import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useDispatch} from 'react-redux';
import {createDeporte} from '../../../redux/actions/actions';
import * as Yup from 'yup';
import styles from './DeporteCreation.module.css';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const initialValues = {
  deporteName: '',
};

export const DeporteCreation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    deporteName: Yup.string()
      .required('Required category name')
      .min(2, 'Too Short!. At leas 2 characters.')
      .max(80, 'Too Long!. No more than 80 characters.')
      .test('has-3-letters', 'Must contain at least 3 letters', (value) =>
        /^(.*[a-zA-Z].*){3,}$/.test(value)
      ),
  });

  const handleSubmit = (values, {resetForm}) => {
    try {
      dispatch(
        createDeporte({
          ...values,
          status: true,
        })
      ).then(() => {
        Swal.fire('Good job!', 'Sport created!', 'success');
        resetForm();
        navigate('/adminProducts');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fail creating a Sport. Please try again later.',
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
            <h1 className={styles.title}>NEW SPORT</h1>
            <div className={styles.field_container}>
              <label>Name</label>
              <div className={styles.input_box}>
                <Field
                  name="deporteName"
                  placeholder="New Sport"
                  className={styles.input}
                />
                <ErrorMessage
                  name="deporteName"
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

export default DeporteCreation;
