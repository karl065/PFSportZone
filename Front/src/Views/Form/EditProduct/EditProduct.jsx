/* eslint-disable react/prop-types */
import { Formik, Form, ErrorMessage, Field } from "formik";
import CloudinaryWidget from "../../../WidgetCloudinary/CloudinaryWidget";
import * as Yup from "yup";
import Swal from "sweetalert2";
import styles from "./EditProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getInventory } from "../../../redux/actions/actions";

const EditProduct = ({ product }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.app.category);
  const sports = useSelector((state) => state.app.sports);
  const marcas = useSelector((state) => state.app.marcas);

  const SignupSchema = Yup.object().shape({
    id_inventory: Yup.string()
      .required("Busque un producto para editar")
      .test("equal-to-product", "Debe ser igual al producto", function (value) {
        return value === product.id_inventory;
      }),
    article_name: Yup.string()
      .required("Nombre de producto requerido")
      .min(2, "Al menos 2 caracteres.")
      .max(80, "Muy largo!. No mas de 80 caracteres.")
      .test("has-3-letters", "Debe contener al menos 3 letras", (value) =>
        /^(.*[a-zA-Z].*){3,}$/.test(value)
      ),
    selling_price: Yup.number()
      .required("Precio de venta requerido")
      .min(0.1, "Mínimo: $0.1")
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    purchase_price: Yup.number()
      .required("Precio de compra requerido")
      .min(0.1, "Mínimo: $0.1")
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    stock: Yup.number()
      .integer("Debe ser un entero")
      .required("Stock requerido")
      .min(0, "El stock debe ser positivo")
      .transform((value) => (isNaN(value) ? undefined : Number(value))),
    description: Yup.string()
      .required("Descripción requerida")
      .min(20, "Muy corto!. Al menos 20 caracteres.")
      .max(1500, "Muy largo!. No mas de 1500 caracteres."),
    image: Yup.array()
      .of(Yup.string())
      .min(1, "Es necesaria una imagen")
      .max(5, "Máximo de 5 imágenes por producto"),
    id_categories: Yup.number()
      .oneOf(
        category.map((category) => category.id_categories),
        "No es una categoría"
      )
      .required("Seleccione una categoría"),
    idMarca: Yup.number()
      .oneOf(
        marcas.map((marca) => marca.idMarca),
        "No es una marca"
      )
      .required("Seleccione una marca"),
    idDeportes: Yup.number()
      .oneOf(
        sports.map((sport) => sport.idDeportes),
        "No es un deporte"
      )
      .required("Seleccione un deporte"),
  });

  const handleDeleteImage = (images, imgUrl, setFieldValue) => {
    const filteredUrls = images.filter((image) => image !== imgUrl);
    setFieldValue("image", filteredUrls);
  };

  const handleSubmit = async (values) => {
    try {
      await dispatch(editProduct(values));
      dispatch(getInventory());
      Swal.fire("Buen trabajo!", "Producto editado correctamente!", "success");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error actualizando el producto. Intente nuevamente.",
      });
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          id_inventory: product?.id_inventory || "",
          article_name: product?.article_name || "",
          selling_price: product?.selling_price || "",
          purchase_price: product?.purchase_price || "",
          stock: product?.stock || "",
          image: product?.image || [],
          description: product?.description || "",
          id_categories: product?.id_categories || "",
          idMarca: product?.idMarca || "",
          idDeportes: product?.idDeportes || "",
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
        enableReinitialize
      >
        {({ errors, values, setFieldValue, resetForm }) => (
          <Form className={styles.form}>
            <div className={styles.all_inputs_container}>
              <div className={`${styles.input_container} ${styles.readOnly}`}>
                <label className={styles.label_code}>
                  Codigo [Solo Lectura]
                </label>
                <Field
                  name="id_inventory"
                  placeholder="Codigo Producto"
                  readOnly
                />
                <ErrorMessage
                  name="id_inventory"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.input_container}>
                <label>Nombre</label>
                <Field name="article_name" placeholder="Nombre del producto" />
                <ErrorMessage
                  name="article_name"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.input_container}>
                <label>Precio de venta</label>

                <Field name="selling_price" placeholder="Precio de venta" />
                <ErrorMessage
                  name="selling_price"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.input_container}>
                <label>Precio de compra</label>

                <Field name="purchase_price" placeholder="Precio de compra" />
                <ErrorMessage
                  name="purchase_price"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.input_container}>
                <label>Stock</label>

                <Field name="stock" placeholder="stock" />
                <ErrorMessage
                  name="stock"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.input_container}>
                <label>Descripcion</label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Descripcion"
                  rows="4"
                />
                <ErrorMessage
                  name="description"
                  component="span"
                  className={styles.error}
                />
              </div>
            </div>

            <div className={styles.selects_container}>
              <div className={styles.input_container}>
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

              <div className={styles.input_container}>
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

              <div className={styles.input_container}>
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

              {product && Object.keys(product).length ? (
                <div className={styles.cloudinary_field}>
                  <div>
                    <CloudinaryWidget
                      fieldName="image"
                      setFieldValue={setFieldValue}
                      images={values.image}
                    />
                    {errors.image && (
                      <span className={styles.error}>{errors.image}</span>
                    )}
                  </div>
                  <div className={styles.images_container}>
                    {values.image &&
                      values.image.map((image, index) => (
                        <div key={index} className={styles.image_box}>
                          <img src={image} alt="Product image" />
                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteImage(
                                values.image,
                                image,
                                setFieldValue
                              )
                            }
                          >
                            X
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              ) : null}
            </div>

            <button
              type="button"
              className={styles.btnReset}
              onClick={resetForm}
            >
              Reiniciar valores del producto
            </button>
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={Object.keys(errors).length > 0}
            >
              Actualizar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProduct;
