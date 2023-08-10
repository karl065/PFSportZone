/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import server from '../../Connections/Server';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import {useSelector} from 'react-redux';
import {isLoggedIn} from '../../helpers/helperLogin';
import styles from './ProductQuestions.module.css';

const ProductQuestions = ({
  productQuestions,
  setProductQuestions,
  productId,
}) => {
  const {role} = useSelector((state) => state.app.user);
  const canDeleteQuestion = role === 'Admin' || role === 'SuperUser';

  const validationSchema = Yup.object({
    message: Yup.string()
      .required('No puede enviar una pregunta vacía')
      .min(5, 'Muy corto!. Al menos 5 caracteres')
      .max(500, 'Muy largo! No mas de 500 caracteres')
      .test('has-2-letters', 'Debe contener al menos 2 letras', (value) =>
        /^(.*[a-zA-Z].*){2,}$/.test(value)
      ),
  });

  const handleDeleteQuestion = async (questionId) => {
    const result = await Swal.fire({
      title: '¿Estás seguro de eliminar esta pregunta?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    });

    // * Confirmo asi que enviamos la solicitud delete.
    if (result.isConfirmed) {
      await axios.delete(`${server.api.baseURL}questions/${questionId}`);

      // * Actualizar el estado unansweredQuestions para eliminar la pregunta de la lista
      setProductQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question.id !== questionId)
      );
    }
  };

  const handleSubmit = (values, {resetForm}) => {
    axios
      .post(`${server.api.baseURL}questions`, {
        id_inventory: productId,
        message: values.message,
      })
      .then(({data}) => setProductQuestions([data, ...productQuestions]))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La pregunta no pudo subirse, intente nuevamente.',
        });
      });
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Preguntas y respuestas</h1>
      {(!isLoggedIn() || role === 'Cliente') && (
        <Formik
          initialValues={{message: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <label htmlFor="message">Deja tu pregunta</label>
            <div className={styles.input_box}>
              <Field name="message" />
              <button type="submit" className={styles.btnSubmit}>
                Enviar
              </button>
            </div>
            <ErrorMessage
              component="span"
              name="message"
              className={styles.error}
            />
          </Form>
        </Formik>
      )}
      <div className={styles.questions_container}>
        {productQuestions.length ? (
          productQuestions.map((question) => (
            <div key={question.id} className={styles.question_box}>
              <p className={styles.message}>P: {question.message}</p>
              {question.response && (
                <p className={styles.response}>R: {question.response}</p>
              )}
              {canDeleteQuestion && (
                <button
                  onClick={() => handleDeleteQuestion(question.id)}
                  className={styles.btnDelete}
                >
                  ELIMINAR
                </button>
              )}
            </div>
          ))
        ) : (
          <h2 className={styles.secondary_title}>
            Se el primero en preguntar!
          </h2>
        )}
      </div>
    </div>
  );
};

export default ProductQuestions;
