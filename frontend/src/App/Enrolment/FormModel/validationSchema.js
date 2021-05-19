import * as Yup from "yup";
const validationSchema = [
  Yup.object({
    student: Yup.object().shape({
      name: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido")
        .matches(/^[aA-zZ\s]+$/, "Solo letras"),
      last_name1: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido")
        .matches(/^[aA-zZ\s]+$/, "Solo letras"),
      last_name2: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido")
        .matches(/^[aA-zZ\s]+$/, "Solo letras"),
      nif: Yup.string().required("Requerido"),
      mobile_number: Yup.number()
        .integer("Debe de ser numerico")
        .required("Requerido")
        .test("len", "Ha de ser de 9 digitos", (val) => {
          if (val !== undefined) {
            return val.toString().length === 9;
          }
        }),
      email_personal: Yup.string()
        .email("Email no válido.")
        .required("Requerido"),
      date_birth: Yup.date().required("Requerido").nullable(),
    }),
  }),
  Yup.object({
    custodians: Yup.array().of(
      Yup.object().shape({
        type: Yup.string()
          .matches(/(P|M|T)/, "Elige una opción válida.")
          .required("Requerido")
          .nullable(),
        nif: Yup.string().required("Requerido"),
        name: Yup.string()
          .required("Requerido")
          .max(50, "Máximo 50 carácteres."),
        last_name1: Yup.string()
          .required("Requerido")
          .max(50, "Máximo 50 carácteres."),
        last_name2: Yup.string()
          .required("Requerido")
          .max(50, "Máximo 50 carácteres."),
        mobile_number: Yup.number()
          .typeError("Escribe tipo numero")
          .required("Requerido")
          .integer("Debe de ser numerico")
          .test("len2", "Ha de ser de 9 digitos", (val) => {
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
      course: Yup.number()
        .typeError("Elige una opción válida")
        .equals([1, 2])
        .required("Requerido"),
    }),
  }),
];

export default validationSchema;
