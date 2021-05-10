import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Link, } from "react-router-dom";

class Custodian {
  constructor() {
    this.custodian = "";
    this.name_lastname = "";
    this.nif = "";
    this.mobile = "";
    this.email = "";
  }
}

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
    // custodian: {
    //   custodian: "",
    //   name_lastname: "",
    //   nif: "",
    //   mobile: "",
    //   email: "",
    // },
    custodians: [],
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
    custodians: Yup.array().of(
      Yup.object().shape({
        custodian: Yup.string()
          .matches(/(p|m|t)/, "Elige una opción válida.")
          .required("Requerido"),
        name_lastname: Yup.string()
          .required("Requerido")
          .max(50, "Máximo 50 carácteres."),
        nif: Yup.string().required("Requerido"),
        mobile: Yup.number()
          .integer("Debe de ser numerico")
          .required("Requerido")
          .test("len", "Ha de ser de 9 digitos", (val) => {
            if (val !== undefined) {
              return val.toString().length === 9;
            }
          }),
        email: Yup.string().email("Email no válido").required("Requerido"),
      })
    ),
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
        {({ values, setFieldValue }) => (
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
              {moment().diff(values.student.date_birth, "years") < 18 ? (
                <div>
                  <FieldArray
                    name="custodians"
                    render={(arrayHelpers) => (
                      <div>
                        <h3>Datos de la/s persona/s responsable/s</h3>
                        {values.custodians &&
                          values.custodians.length > 0 &&
                          values.custodians.map((custodiansItem, index) => (
                            <div key={index}>
                              <div>
                                <div
                                  role="group"
                                  aria-labelledby="my-radio-group"
                                >
                                  <label>
                                    <Field
                                      type="radio"
                                      name={`custodians[${index}].custodian`}
                                      value="padre"
                                    />
                                    Padre
                                  </label>
                                  <label>
                                    <Field
                                      type="radio"
                                      name={`custodians[${index}].custodian`}
                                      value="madre"
                                    />
                                    Madre
                                  </label>
                                  <label>
                                    <Field
                                      type="radio"
                                      name={`custodians[${index}].custodian`}
                                      value="tutor"
                                    />
                                    Tutor/a legal
                                  </label>
                                </div>
                                <ErrorMessage
                                  name={`custodians[${index}].custodian`}
                                ></ErrorMessage>
                              </div>
                              <div>
                                <label
                                  htmlFor={`custodians[${index}].name_lastname`}
                                >
                                  Nombre y apellidos:
                                </label>
                                <Field
                                  name={`custodians[${index}].name_lastname`}
                                  type="text"
                                ></Field>
                                <ErrorMessage
                                  name={`custodians[${index}].name_lastname`}
                                ></ErrorMessage>
                              </div>
                              <div>
                                <label htmlFor={`custodians[${index}].nif`}>
                                  NIF:
                                </label>
                                <Field
                                  name={`custodians[${index}].nif`}
                                  type="text"
                                ></Field>
                                <ErrorMessage
                                  name={`custodians[${index}].nif`}
                                ></ErrorMessage>
                              </div>
                              <div>
                                <label htmlFor={`custodians[${index}].mobile`}>
                                  Telefono movil:
                                </label>
                                <Field
                                  name={`custodians[${index}].mobile`}
                                  type="number"
                                ></Field>
                                <ErrorMessage
                                  name={`custodians[${index}].mobile`}
                                ></ErrorMessage>
                              </div>
                              <div>
                                <label htmlFor={`custodians[${index}].email`}>
                                  Email:
                                </label>
                                <Field
                                  name={`custodians[${index}].email`}
                                  type="text"
                                ></Field>
                                <ErrorMessage
                                  name={`custodians[${index}].email`}
                                ></ErrorMessage>
                              </div>
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                -
                              </button>
                            </div>
                          ))}
                        <button
                          type="button"
                          onClick={() => arrayHelpers.push(new Custodian())}
                        >
                          Añadir un responsable
                        </button>
                      </div>
                    )}
                  />
                </div>
              ) : (
                {}
                //No puedo eliminar array
                // setFieldValue("custodians", [], false)
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
      <Link to="/matriculas">Volver</Link>
    </div>
  );
};

export default Enrolment;
