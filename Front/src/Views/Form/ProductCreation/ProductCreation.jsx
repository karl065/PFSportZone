import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styles from './ProductCreation.module.css';
import axios from 'axios';
import server from '../../../Connections/Server';

const initialValues = {
  article_name: '',
  selling_price: '',
  purchase_price: '',
  stock: '',
  image: '',
  description: '',
};

export const ProductCreation = () => {
  const SignupSchema = Yup.object().shape({
    article_name: Yup.string()
      .required('Required')
      .min(2, 'Too Short!')
      .max(80, 'Too Long!'),
    selling_price: Yup.number()
      .required('Required')
      .min(0.1, 'Minimum Price = 0.1'),
    purchase_price: Yup.number()
      .required('Required')
      .min(0.1, 'Minimum Price = 0.1'),
    stock: Yup.number().required('Required').min(0, 'Stock must be positive'),
    description: Yup.string()
      .required('Description required')
      .min(20, 'Too Short!')
      .max(500, 'Too Long!'),
    image: Yup.string().required('Image required').url('Not an URL'),
  });

  const handleSubmit = (values) => {
    // ! Aun no esta el endpoint del producto pero esta era la plantilla que tenia
    // a agregar status: "Available"
    try {
      axios
        .post(`${server.api.baseURL}users`, {
          ...values,
          status: 'Available',
        })
        .then(() => {
          alert('Product successfully created!');
        });
    } catch (error) {
      alert('Fail creating product. Please try again later.');
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
            <div className={styles.header}>
              <label>New product</label>
              <Field
                name="text"
                placeholder="Product name"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.product_window}>
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
                  type="number"
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
                  type="number"
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
                  name="description"
                  placeholder="Product description"
                  className={styles.input}
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

export default ProductCreation;
