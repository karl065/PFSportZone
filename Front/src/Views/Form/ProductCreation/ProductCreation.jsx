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
      .required('ID del producto requerido')
      .min(3, 'Al menos 3 dígitos'),
    article_name: Yup.string()
      .required('Nombre de producto requerido')
      .min(2, 'Al menos 2 caracteres.')
      .max(80, 'Muy largo!. No mas de 80 caracteres.')
      .test('has-3-letters', 'Debe contener al menos 3 letras', (value) =>
        /^(.*[a-zA-Z].*){3,}$/.test(value)
      ),
    selling_price: Yup.number()
      .required('Precio de venta requerido')
      .min(0.1, 'Mínimo: $0.1')
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    purchase_price: Yup.number()
      .required('Precio de compra requerido')
      .min(0.1, 'Mínimo: $0.1')
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    stock: Yup.number()
      .integer('Debe ser un entero')
      .required('Stock requerido')
      .min(0, 'El stock debe ser positivo')
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    description: Yup.string()
      .required('Descripción requerida')
      .min(20, 'Muy corto!. Al menos 20 caracteres.')
      .max(1500, 'Muy largo!. No mas de 1500 caracteres.'),
    image: Yup.array()
      .of(Yup.string())
      .min(1, 'Es necesaria una imagen')
      .max(5, 'Máximo de 5 imágenes por producto'),
    id_categories: Yup.number()
      .oneOf(
        category.map((category) => category.id_categories),
        'No es una categoría'
      )
      .required('Seleccione una categoría'),
    idMarca: Yup.number()
      .oneOf(
        marcas.map((marca) => marca.idMarca),
        'No es una marca'
      )
      .required('Seleccione una marca'),
    idDeportes: Yup.number()
      .oneOf(
        sports.map((sport) => sport.idDeportes),
        'No es un deporte'
      )
      .required('Seleccione un deporte'),
  });

  const handleSubmit = (values, {resetForm}) => {
    try {
      dispatch(
        createProduct({
          ...values,
          status: 'Available',
        })
      ).then(() => {
        Swal.fire('Buen trabajo!', 'Producto creado correctamente!', 'success');
        resetForm();
        navigate('/adminProducts');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error creando un producto. Intente nuevamente.',
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
            <h1 className={styles.title}>NUEVO PRODUCTO</h1>
            <div className={styles.field_container}>
              <div className={styles.select_container}>
                <label>Categoría</label>
                <Field as="select" name="id_categories">
                  <option value="">Seleccione una categoría</option>
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
                <label>Deporte</label>
                <Field as="select" name="idDeportes">
                  <option value="">Seleccione un deporte</option>
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
                  <option value="">Seleccione una marca</option>
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
                  placeholder="Código de Producto"
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
              <label>Nombre</label>
              <div className={styles.input_box}>
                <Field
                  name="article_name"
                  placeholder="Nombre del producto"
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
              <label>Precio de venta</label>
              <div className={styles.input_box}>
                <Field
                  name="selling_price"
                  placeholder="Precio de venta"
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
              <label>Precio de compra</label>
              <div className={styles.input_box}>
                <Field
                  name="purchase_price"
                  placeholder="Mínimo 0.1"
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
              <label>Descripción</label>
              <div className={styles.input_box}>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Descripción del producto"
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

export default ProductCreation;
