import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createMarca } from "../../../redux/actions/actions";
import * as Yup from "yup";
import styles from "./MarcaCreation.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  description: "",
};

export const MarcaCreation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required("Nombre marca requerida")
      .min(2, "Muy corto!. Al menos 2 caracteres.")
      .max(80, "Muy largo!. No mas de 80 caracteres."),
    description: Yup.string()
      .required("Descripcion requerida")
      .min(20, "Muy corto!. Al menos 20 caracteres.")
      .max(10000, "Muy largo!. No mas de 10000 caracteres."),
  });

  const handleSubmit = (values, { resetForm }) => {
    try {
      dispatch(
        createMarca({
          ...values,
          is_active: true,
        })
      ).then(() => {
        Swal.fire("Buen trabajo!", "Marca creada!", "success");
        resetForm();
        navigate("/adminProducts");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error creando la Marca. Intente nuevamente.",
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
        {({ errors }) => (
          <Form className={styles.form}>
            <h1 className={styles.title}>NUEVA MARCA</h1>
            <div className={styles.field_container}>
              <label>NOMBRE</label>
              <div className={styles.input_box}>
                <Field
                  name="name"
                  placeholder="Marca"
                  className={styles.input}
                />
                <ErrorMessage
                  name="name"
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
                  placeholder="Descripción de la Marca"
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

export default MarcaCreation;
