import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {createProduct} from '../../../redux/actions/actions';
import CloudinaryWidget from '../../../WidgetCloudinary/CloudinaryWidget';
import * as Yup from 'yup';
import styles from './ProductCreation.module.css';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const initialValues = {
  id_inventory: '',
  article_name: '',
  selling_price: '',
  purchase_price: '',
  stock: '',
  image: [],
  description: '',
  id_categories: '',
  idMarca: '',
  idDeportes: '',
};

export const ProductCreation = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.app.category);
  const sports = useSelector((state) => state.app.sports);
  const marcas = useSelector((state) => state.app.marcas);
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    id_inventory: Yup.string()
      .required('Product Identifier required')
      .min(3, 'At least 3 digits'),
    article_name: Yup.string()
      .required('Required product name')
      .min(2, 'Too Short!. At leas 2 characters.')
      .max(80, 'Too Long!. No more than 80 characters.')
      .test('has-3-letters', 'Must contain at least 3 letters', (value) =>
        /^(.*[a-zA-Z].*){3,}$/.test(value)
      ),
    selling_price: Yup.number()
      .required('Required selling price')
      .min(0.1, 'Minimum Price: 0.1')
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    purchase_price: Yup.number()
      .required('Required purchase price')
      .min(0.1, 'Minimum Price: 0.1')
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    stock: Yup.number()
      .integer('Must be an integer')
      .required('Required stock')
      .min(0, 'Stock must be positive')
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    description: Yup.string()
      .required('Description required')
      .min(20, 'Too Short!. At least 20 characters')
      .max(1500, 'Too Long!. No more than 1500 characters.'),
    image: Yup.array()
      .of(Yup.string())
      .min(1, 'At least one image is required')
      .max(5, 'Maximum of 5 images per product'),
    id_categories: Yup.number()
      .oneOf(
        category.map((category) => category.id_categories),
        'Not a valid category'
      )
      .required('Select one category'),
    idMarca: Yup.number()
      .oneOf(
        marcas.map((marca) => marca.idMarca),
        'Not a valid marca'
      )
      .required('Select one Marca'),
    idDeportes: Yup.number()
      .oneOf(
        sports.map((sport) => sport.idDeportes),
        'Not a valid Sport'
      )
      .required('Select one sport'),
  });

  const handleSubmit = (values, {resetForm}) => {
    try {
      dispatch(
        createProduct({
          ...values,
          status: 'Available',
        })
      ).then(() => {
        Swal.fire('Good job!', 'Product created!', 'success');
        resetForm();
        navigate('/adminProducts');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fail creating a product. Please try again later.',
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
        {({errors, setFieldValue}) => (
          <Form className={styles.form}>
            <h1 className={styles.title}>NEW PRODUCT</h1>
            <div className={styles.field_container}>
              <div className={styles.select_container}>
                <label>Category</label>
                <Field as="select" name="id_categories">
                  <option value="">Select a category</option>
                  {category.map((cat, index) => (
                    <option value={cat.id_categories} key={index}>
                      {cat.categoryName}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="id_categories"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles.select_container}>
                <label>Sport</label>
                <Field as="select" name="idDeportes">
                  <option value="">Select a sport</option>
                  {sports.map((sport, index) => (
                    <option value={sport.idDeportes} key={index}>
                      {sport.deporteName}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="idDeportes"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles.select_container}>
                <label>Marca</label>
                <Field as="select" name="idMarca">
                  <option value="">Select a marca</option>
                  {marcas.map((marca, index) => (
                    <option value={marca.idMarca} key={index}>
                      {marca.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="idMarca"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles.input_box}>
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
            </div>
            <div className={styles.field_container}>
              <label>Name</label>
              <div className={styles.input_box}>
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
            </div>
            <div className={styles.field_container}>
              <label>Selling price</label>
              <div className={styles.input_box}>
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
            </div>

            <div className={styles.field_container}>
              <label>Purchase price</label>
              <div className={styles.input_box}>
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
            </div>
            <div className={styles.field_container}>
              <label>Stock</label>
              <div className={styles.input_box}>
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
            </div>

            <div className={styles.cloudinary_field}>
              <div className={styles.input_box}>
                <CloudinaryWidget
                  fieldName="image"
                  setFieldValue={setFieldValue}
                />
                <ErrorMessage
                  name="image"
                  component="span"
                  className={styles.error}
                />
              </div>
            </div>

            <div className={styles.field_container}>
              <label>Description</label>
              <div className={styles.input_box}>
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
