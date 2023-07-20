import React from "react";
import { useFormik } from "formik";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.field}>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <div className={styles.field}>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>

        <div className={styles.field}>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
