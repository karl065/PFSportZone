import {useEffect, useState} from 'react';
import Sidebar from '../../Components/SideBar/Sidebar';
import axios from 'axios';
import server from '../../Connections/Server';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import styles from './AdminQuestions.module.css';
import {useSelector} from 'react-redux';
import { successToast } from '../../helpers/toastNotification';

const AdminQuestions = () => {
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const {role} = useSelector((state) => state.app.user);
  const canDeleteQuestion = role === 'Admin' || role === 'SuperUser';

  useEffect(() => {
    axios.get(`${server.api.baseURL}questions`).then(({data}) => {
      setUnansweredQuestions(data);
    });
  }, []);

  const validationSchema = Yup.object({
    response: Yup.string()
      .required('Este campo es obligatorio')
      .min(5, 'Muy corto!. Al menos 2 caracteres')
      .max(1000, 'Muy largo! No mas de 1000 caracteres')
      .test('has-2-letters', 'Debe contener al menos 2 letras', (value) =>
        /^(.*[a-zA-Z].*){2,}$/.test(value)
      ),
  });

  const handleCardClick = (questionId) => {
    if (selectedQuestion === questionId) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(questionId);
    }
  };

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
      setUnansweredQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question.id !== questionId)
      );
    }
  };

  const handleSubmit = async (idQuestion, response) => {
    try {
      // * Put para enviar la respuesta y darla como contestada.
      await axios.put(`${server.api.baseURL}questions/${idQuestion}`, {
        response,
      });

      // * Actualizar la lista de preguntas sin responder
      const filteredQuestions = unansweredQuestions.filter(
        (question) => question.id !== idQuestion
      );

      setUnansweredQuestions(filteredQuestions);
      successToast("Respuesta enviada correctamente", 1500);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo error subiendo la respuesta. Intente nuevamente',
      });
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.questions_container}>
        <h1>PREGUNTAS 🤔</h1>
        <div className={styles.cards_container}>
          {unansweredQuestions.length > 0 ? (
            unansweredQuestions.map((question, index) => (
              <div className={styles.card_box} key={index}>
                <div
                  className={styles.card}
                  onClick={() => handleCardClick(question.id)}
                >
                  <img
                    src={question.product.image[0]}
                    alt={question.product.article_name}
                  />
                  <div className={styles.card_info}>
                    <h3>{question.product.article_name}</h3>
                    <p>{question.message}</p>
                  </div>
                  {canDeleteQuestion && (
                    <button
                      onClick={() => handleDeleteQuestion(question.id)}
                      className={styles.deleteBtn}
                    >
                      Eliminar
                    </button>
                  )}
                  <span className={styles.question_date}>
                    Hecha el dia: {question.createdAt}
                  </span>
                </div>
                <div>
                  {selectedQuestion === question.id && (
                    <Formik
                      initialValues={{response: ''}}
                      validationSchema={validationSchema}
                      onSubmit={(values) =>
                        handleSubmit(question.id, values.response)
                      }
                    >
                      <Form className={styles.form}>
                        <div className={styles.input_box}>
                          <Field
                            as="textarea"
                            name="response"
                            placeholder="Respuesta..."
                            rows="2"
                          />
                          <button type="submit" className={styles.btnSubmit}>
                            Enviar
                          </button>
                        </div>
                        <ErrorMessage
                          component="span"
                          name="response"
                          className={styles.error}
                        />
                      </Form>
                    </Formik>
                  )}
                </div>
              </div>
            ))
          ) : (
            <h2 className={styles.secondary_title}>
              No hay preguntas por responder 😎
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminQuestions;
