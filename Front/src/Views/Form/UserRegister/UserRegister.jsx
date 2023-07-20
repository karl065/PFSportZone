import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styles from "./UserRegister.module.css";
import axios from "axios";
import server from "../../../Connections/Server";

const initialValues = {
  email: "",
  user: "",
  password: "",
  passwordConfirmation: "",
};

export const UserRegister = () => {
  const navigate = useNavigate();

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
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const handleSubmit = (values) => {
    // ! Funcional pero cuando este el redux cambiarlo a una action thunk.
    // role: Client userStatus: true
    try {
      axios
        .post(`${server.api.baseURL}users`, {
          ...values,
          role: "Cliente",
          userStatus: true,
        })
        .then(() => {
          alert("Successfully registered!");
          navigate("/home");
        });
    } catch (error) {
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <div className={styles.form_wrapper}>
      <h1 className={styles.title}>Register</h1>
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
    </div>
  );
};

export default UserRegister;
