import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../../Components";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import styles from "./UserRegister.module.css";
import Swal from "sweetalert2";
import { createUser } from "../../../redux/actions/actions";

const initialValues = {
  email: "",
  user: "",
  password: "",
  passwordConfirmation: "",
};

export const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.isLoading);

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required("Email is required")
      .email("Not an email"),
    user: Yup.string()
      .trim()
      .required("Username is required")
      .min(5, "Too Short! At least 5 characters")
      .max(30, "Too Long! 30 characters maximum"),
    password: Yup.string()
      .trim()
      .required("Password is required")
      .matches(/^\S*$/, "Cannot have spaces")
      .min(5, "At least 5 characters"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required confirmation"),
  });

  const handleSubmit = (values) => {
    // ? Implementar como un componente loading que tenga un fondo tipo swal, centrado en la pantalla y cargue un spinner.
    try {
      const newUser = {
        ...values,
        role: "Cliente",
        userStatus: true,
      };

      dispatch(createUser(newUser)).then(() => {
        Swal.fire("Good job!", "Successfully register!", "success").then(() =>
          navigate("/home")
        );
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Registration failed. Please try again later.",
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
          <>
            <Form className={styles.form}>
              <p className={styles.loginParagraph}>
                Already have an account?
                <Link to="/login" className={styles.loginText}>
                  Log in
                </Link>
              </p>
              <h1 className={styles.title}>Register</h1>
              <div className={styles.field}>
                <label>Email</label>
                <Field
                  name="email"
                  placeholder="Email"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.field}>
                <label>Username</label>
                <Field
                  name="user"
                  placeholder="Username"
                  className={styles.input}
                />
                <ErrorMessage
                  name="user"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.field}>
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={styles.input}
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles.field}>
                <label>Confirm Password</label>
                <Field
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Confirm Password"
                  className={styles.input}
                />
                <ErrorMessage
                  name="passwordConfirmation"
                  component="span"
                  className={styles.error}
                />
              </div>

              <button
                type="submit"
                className={styles.btnSubmit}
                disabled={Object.keys(errors).length > 0}
              >
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default UserRegister;
