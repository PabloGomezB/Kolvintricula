import React from "react";
import { Form, Formik } from "formik";
import moment from "moment";
import { Link } from "react-router-dom";
import Student from "./Student";
import Custodian from "./Custodian";
import cursmoduluf from "./cursmoduluf";
import AcademicData from "./AcademicData";
import { Button, Typography } from "@material-ui/core";
import validationSchema from "./FormModel/validationSchema";
import formInitialValues from "./FormModel/formInitialValues";

const Enrolment = (props) => {

  let studentData  = {
    student: {
    },
    custodians: [],
    academic_data: {
      course: "",
      moduluf: [
      ],
    },
  }
  studentData.student = props.studentData[0];

  const onSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    console.log("submit", values);
    setSubmitting(false);
  };

  return (
    <div>
      <Link to="/">Volver</Link>

      <Typography variant="h3" gutterBottom>
        Matrícula
      </Typography>
      <Formik
        initialValues={studentData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          isValid,
          isSubmitting,
          setFieldValue,
          errors,
          touched,
        }) => (
          <Form>
            <div>
              <Student />
              {moment().diff(values.student.date_birth, "years") < 18 && (
                <Custodian />
              )}
              <AcademicData cursmoduluf={cursmoduluf} values={values} />

              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Enviar
              </Button>
            </div>
            <br />

            <div>
              VALUES:
              <pre>{JSON.stringify(values, null, 2)}</pre>
              ERRORS:
              <pre>{JSON.stringify(errors, null, 2)}</pre>
              TOUCHED:
              <pre>{JSON.stringify(touched, null, 2)}</pre>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Enrolment;
