import React from "react";
import { Form, useFormik, FormikProvider, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Student from "./Student";
// import moment from "moment";

const Enrolment = () => {
  const formik = useFormik({
    initialValues: {
      student: {
        name: "",
        last_name1: "",
        last_name2: "",
        nif: "",
        mobile_number: "",
        email: "",
        date_birth: new Date().toISOString().substr(0, 10),
      },
    },
    validationSchema: Yup.object({
      student: Yup.object().shape({
        name: Yup.string()
          .max(15, "Máximo 15 carácteres.")
          .required("Requerido"),
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
      }),
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
        {({ values }) => (
          <Form>
            <div>
              <label htmlFor="student.name">Primer nombre:</label>
              <Field name="student.name" type="text"></Field>
              <ErrorMessage name="student.name"></ErrorMessage>
            </div>
            <div>
              <label htmlFor="student.last_name1">Primer apellido:</label>
              <Field name="student.last_name1" type="text"></Field>
              <ErrorMessage name="student.last_name1"></ErrorMessage>
            </div>
            <div>
              <label htmlFor="student.last_name2">Segundo apellido:</label>
              <Field name="student.last_name2" type="text"></Field>
              <ErrorMessage name="student.last_name2"></ErrorMessage>
            </div>
            <div>
              <label htmlFor="student.nif">NIF:</label>
              <Field name="student.nif" type="text"></Field>
              <ErrorMessage name="student.nif"></ErrorMessage>
            </div>
            <div>
              <label htmlFor="student.email">Email:</label>
              <Field name="student.email" type="email"></Field>
              <ErrorMessage name="student.email"></ErrorMessage>
            </div>
            <div>
              <label htmlFor="student.mobile_number">Movil:</label>
              <Field name="student.mobile_number" type="number"></Field>
              <ErrorMessage name="student.mobile_number"></ErrorMessage>
            </div>
            <div>
              <label htmlFor="student.date_birth">Fecha de nacimiento:</label>
              <Field name="student.date_birth" type="date"></Field>
              <ErrorMessage name="student.date_birth"></ErrorMessage>
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </FormikProvider>
    </>
  );
};
export default Enrolment;
