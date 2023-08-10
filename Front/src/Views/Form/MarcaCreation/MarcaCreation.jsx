import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
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
  const { marcas } = useSelector((state) => state.app);

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required("Nombre marca requerida")
      .min(2, "Muy corto!. Al menos 2 caracteres.")
      .max(80, "Muy largo!. No mas de 80 caracteres.")
      .test(
        "no-special-chars",
        "No se permiten caracteres especiales",
        (value) => /^[a-zA-Z0-9\s]+$/.test(value)
      )
      .test("unique-brand", "Esta marca ya existe", (value) => {
        return !marcas.some(
          (brand) => brand.name.toLowerCase() === value.trim().toLowerCase()
        );
      }),
    description: Yup.string()
      .required("Descripcion requerida")
      .min(10, "Muy corto!. Al menos 10 caracteres.")
      .max(150, "Muy largo!. No mas de 150 caracteres."),
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
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MarcaCreation;
