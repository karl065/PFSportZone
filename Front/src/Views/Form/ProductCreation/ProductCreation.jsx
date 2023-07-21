import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ProductCreation.module.css";
import axios from "axios";
import server from "../../../Connections/Server";
import Swal from "sweetalert2";

const initialValues = {
  id_inventory: "",
  article_name: "",
  selling_price: "",
  purchase_price: "",
  stock: "",
  image: "",
  description: "",
};

export const ProductCreation = () => {
  const SignupSchema = Yup.object().shape({
    id_inventory: Yup.string()
      .required("Product Identifier required")
      .min(3, "At least 3 digits"),
    article_name: Yup.string()
      .required("Required product name")
      .min(2, "Too Short!. At leas 2 characters.")
      .max(80, "Too Long!. No more than 80 characters.")
      .test(
        "has-3-letters",
        "Must contain at least 3 letters",
        (value) => /^(.*[a-zA-Z].*){3,}$/.test(value)
      ),
    selling_price: Yup.number()
      .required("Required selling price")
      .min(0.1, "Minimum Price: 0.1")
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    purchase_price: Yup.number()
      .required("Required purchase price")
      .min(0.1, "Minimum Price: 0.1")
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    stock: Yup.number()
      .integer("Must be an integer")
      .required("Required stock")
      .min(0, "Stock must be positive")
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    description: Yup.string()
      .required("Description required")
      .min(20, "Too Short!. At least 20 characters")
      .max(10000, "Too Long!. No more than 10000 characters."),
    image: Yup.string().required("Image required").url("Not an URL"),
  });

  const handleSubmit = (values) => {
    // ! Aun no esta el endpoint del producto pero esta era la plantilla que tenia
    // a agregar status: "Available"
    try {
      axios
        .post(`${server.api.baseURL}inventory`, {
          ...values,
          status: "Available",
        })
        .then(() => {
          Swal.fire("Good job!", "Successfully register!", "success");
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fail creating a product. Please try again later.",
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
            <h1 className={styles.title}>NEW PRODUCT</h1>
            <div className={styles.field}>
              <label>ID</label>
              <Field
                name="id_inventory"
                placeholder="Product Code"
                className={styles.input}
              />
              <ErrorMessage
                name="id_inventory"
                component="span"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label>Name</label>
              <Field
                name="article_name"
                placeholder="Product name"
                className={styles.input}
              />
              <ErrorMessage
                name="article_name"
                component="span"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label>Selling price</label>
              <Field
                name="selling_price"
                placeholder="Selling price"
                className={styles.input}
              />
              <ErrorMessage
                name="selling_price"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label>Purchase price</label>
              <Field
                name="purchase_price"
                placeholder="Min 0.1"
                className={styles.input}
              />
              <ErrorMessage
                name="purchase_price"
                component="span"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label>Stock</label>
              <Field
                name="stock"
                placeholder="Stock"
                className={styles.input}
              />
              <ErrorMessage
                name="stock"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label>Image(s)</label>
              <Field
                name="image"
                type="url"
                placeholder="URL"
                className={styles.input}
              />
              <ErrorMessage
                name="image"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label>Description</label>
              <Field
                as="textarea"
                name="description"
                placeholder="Product description"
                className={styles.input}
                rows="4"
              />
              <ErrorMessage
                name="description"
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
        )}
      </Formik>
    </div>
  );
};

export default ProductCreation;
