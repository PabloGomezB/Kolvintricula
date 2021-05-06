import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Student from "./Student";
// import moment from "moment";

const Enrolment = () => {
  const initialValues = {
    student: {
      name: "",
      last_name1: "",
      last_name2: "",
      nif: "",
      mobile_number: "",
      email: "",
      date_birth: new Date().toISOString().substr(0, 10),
    },
  };

  const validationSchema = Yup.object({
    student: Yup.object().shape({
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
  });

  const onSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));

    setSubmitting(false);
  };

  return (
    <div>
      <h1>Matrícula</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => <Student params={values}></Student>}
      </Formik>
    </div>
  );
};

export default Enrolment;
