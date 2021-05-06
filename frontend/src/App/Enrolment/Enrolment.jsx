import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";

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
    custodian: {
      custodian: "",
      name_lastname: "",
      nif: "",
      mobile: "",
      email: "",
    },
    academic_data: { course: "" },
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
    }),
    custodian: Yup.object().shape({
      custodian: Yup.string()
        .matches(/(p|m|t)/, "Elige una opción válida.")
        .required("Requerido"),
      name_lastname: Yup.string()
        .required("Requerido")
        .max(50, "Máximo 50 carácteres."),
      nif: Yup.string().required("Requerido"),
      mobile: Yup.number().required("Requerido"),
      email: Yup.string().email("Email no válido").required("Requerido"),
    }),
    academic_data: Yup.object().shape({
      course: Yup.number().equals([1, 2]).required("Requerido"),
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
        {({ values }) => (
          <Form>
            <>
              <div>
                <h3>Datos del alumno</h3>
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
                  <label htmlFor="student.date_birth">
                    Fecha de nacimiento:
                  </label>
                  <Field name="student.date_birth" type="date"></Field>
                  <ErrorMessage name="student.date_birth"></ErrorMessage>
                </div>
              </div>
              {/* Esto no renderiza el nuevo validationSchema */}

              {moment().diff(values.student.date_birth, "years") < 18 && (
                <div>
                  <h3>Datos de la/s persona/s responsable/s</h3>
                  <div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <Field
                          type="radio"
                          name="custodian.custodian"
                          value="padre"
                        />
                        Padre
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="custodian.custodian"
                          value="madre"
                        />
                        Madre
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="custodian.custodian"
                          value="tutor"
                        />
                        Tutor/a legal
                      </label>
                    </div>
                    <ErrorMessage name="custodian.custodian"></ErrorMessage>
                  </div>
                  <div>
                    <label htmlFor="custodian.name_lastname">
                      Nombre y apellidos:
                    </label>
                    <Field name="custodian.name_lastname" type="text"></Field>
                    <ErrorMessage name="custodian.name_lastname"></ErrorMessage>
                  </div>
                  <div>
                    <label htmlFor="custodian.nif">NIF:</label>
                    <Field name="custodian.nif" type="text"></Field>
                    <ErrorMessage name="custodian.nif"></ErrorMessage>
                  </div>
                  <div>
                    <label htmlFor="custodian.mobile">Telefono movil:</label>
                    <Field name="custodian.mobile" type="text"></Field>
                    <ErrorMessage name="custodian.mobile"></ErrorMessage>
                  </div>
                  <div>
                    <label htmlFor="custodian.email">Email:</label>
                    <Field name="custodian.email" type="text"></Field>
                    <ErrorMessage name="custodian.email"></ErrorMessage>
                  </div>
                </div>
              )}
              <div>
                <h3>Datos academicos</h3>
                <div>
                  <div role="group" aria-labelledby="my-radio-group">
                    <label>
                      <Field
                        type="radio"
                        name="academic_data.course"
                        value="1"
                      />
                      1er Curso
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="academic_data.course"
                        value="2"
                      />
                      2ndo Curso
                    </label>
                  </div>
                  <ErrorMessage name="academic_data.course"></ErrorMessage>
                </div>
              </div>
              <button type="submit">Enviar</button>
            </>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Enrolment;
