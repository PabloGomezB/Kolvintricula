import * as Yup from "yup";
/**
 * Objeto de validación de datos para Formik
 */
const validationSchema = [
  Yup.object({
    student: Yup.object().shape({
      name: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido")
        .matches(/^[A-zÀ-ú]+$/, "Tu nombre no puede contener espacios o números"),
      last_name1: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido")
        .matches(/^[A-zÀ-ú]+$/, "Tu primer apellido no puede contener espacios o números"),
      last_name2: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido")
        .matches(/^[A-zÀ-ú]+$/, "Tu segundo apellido no puede contener espacios o números"),
      nif: Yup.string()
        .required("Requerido")
        .matches(
          /^[XYZ]?\d{5,8}[A-Z]$/,
          "Introduce un NIF o NIE válido"
        ),
      mobile_number: Yup.number()
        .integer("Debe de ser numérico")
        .required("Requerido")
        .test("len", "Ha de ser de 9 dígitos", (val) => {
          if (val !== undefined) {
            return val.toString().length === 9;
          }
        }),
      email_personal: Yup.string()
        .email("Email no válido.")
        .required("Requerido"),
      date_birth: Yup.date().required("Requerido").nullable(),
      photo_path: Yup.mixed().required("Requerido"),
    }),
  }),
  Yup.object({
    custodians: Yup.array().of(
      Yup.object().shape({
        type: Yup.string()
          .matches(/(P|M|T)/, "Elige una opción válida.")
          .required("Requerido")
          .nullable(),
        nif: Yup.string().required("Requerido").matches(
          /^[XYZ]?\d{5,8}[A-Z]$/,
          "Introduce un NIF o NIE válido"
        ),
        name: Yup.string()
          .required("Requerido")
          .max(50, "Máximo 50 carácteres.")
          .matches(/^[A-zÀ-ú]+$/, "Tu nombre no puede contener espacios o números"),
        last_name1: Yup.string()
          .required("Requerido")
          .max(50, "Máximo 50 carácteres.")
          .matches(/^[A-zÀ-ú]+$/, "Tu primer apellido no puede contener espacios o números"),
        last_name2: Yup.string()
          .required("Requerido")
          .max(50, "Máximo 50 carácteres.")
          .matches(/^[A-zÀ-ú]+$/, "Tu segundo apellido no puede contener espacios o números"),
        mobile_number: Yup.number()
          .typeError("Escribe tipo número")
          .required("Requerido")
          .integer("Debe de ser numérico")
          .test("len2", "Ha de ser de 9 dígitos", (val) => {
            if (val !== undefined) {
              return val.toString().length === 9;
            }
          })
          .required("Requerido"),
        email: Yup.string().email("Email no válido").required("Requerido"),
      })
    ),
  }),
  Yup.object({
    academic_data: Yup.object().shape({
      year: Yup.number()
        .typeError("Elige una opción válida")
        .equals([1, 2])
        .required("Requerido"),
    }),
  }),
  Yup.object({
    consent: Yup.object().shape({
      c2: Yup.string().required("Requerido"),
      c3: Yup.string().required("Requerido"),
      c4: Yup.string().required("Requerido"),
      c5: Yup.string().required("Requerido"),
      c6: Yup.string().required("Requerido"),
      c7: Yup.string().required("Requerido"),
      firma: Yup.string().required("Requerido"),
    }),
  }),
];

export default validationSchema;
