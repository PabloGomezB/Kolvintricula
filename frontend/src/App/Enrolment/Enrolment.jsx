import React from "react";
import { Form, useFormik, FormikProvider, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import moment from "moment";

const Enrolment = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      last_name1: "",
      last_name2: "",
      nif: "",
      mobile_number: "",
      email: "",
      date_birth: new Date().toISOString().substr(0, 10),
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Máximo 15 carácteres.").required("Requerido"),
      last_name1: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido"),
      last_name2: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido"),
      nif: Yup.string().required("Requerido"),
      mobile_number: Yup.number()
        .integer("Debe de ser numerico")
        .required("Requerido")
        .test("len", "Ha de ser de 9 digitos", (val) => {
          if (val !== undefined) {
            return val.toString().length === 9;
          }
        }),
      email: Yup.string().email("Email no válido.").required("Requerido"),
      date_birth: Yup.date().required("Requerido"),
      // .test(
      //   "DOB",
      //   "Has de ser mayor de 18.",
      //   (value) => moment().diff(moment(value), "years") >= 18
      // ),
    }),
    onSubmit: (values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    },
  });

  return (
    <>
      <h1>Matrícula</h1>
      <FormikProvider value={formik}>
        <Form>
          <div>
            <label htmlFor="name">Primer nombre:</label>
            <Field name="name" type="text"></Field>
            <ErrorMessage name="name"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="last_name1">Primer apellido:</label>
            <Field name="last_name1" type="text"></Field>
            <ErrorMessage name="last_name1"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="last_name2">Segundo apellido:</label>
            <Field name="last_name2" type="text"></Field>
            <ErrorMessage name="last_name2"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="nif">NIF:</label>
            <Field name="nif" type="text"></Field>
            <ErrorMessage name="nif"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email"></Field>
            <ErrorMessage name="email"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="mobile_number">Movil:</label>
            <Field name="mobile_number" type="number"></Field>
            <ErrorMessage name="mobile_number"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="date_birth">Fecha de nacimiento:</label>
            <Field name="date_birth" type="date"></Field>
            <ErrorMessage name="date_birth"></ErrorMessage>
          </div>
          <button type="submit">Enviar</button>
        </Form>
      </FormikProvider>
    </>
  );
};
export default Enrolment;
