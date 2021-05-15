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
import axios from "axios";

const Enrolment = (props) => {
  let studentData = {
    student: {},
    custodians: [],
    academic_data: {
      course: "",
      moduluf: [],
    },
  };

  // Si se reciben los props (existe student) guardamos los datos de props en el objeto local studentData para poder procesar los "values"
  // Sin este control en la variable global "values" se almacenarían datos de un objeto "props.studentData[0]" que es "undefined"
  if (props.studentData !== 0) studentData.student = props.studentData[0];

  const onSubmit = (values, { setSubmitting }) => {
    axios
      .post(
        `http://labs.iam.cat/~a18pabgombra/Kolvintricula/backend/public/api/enrolments/add`,
        {
          values,
        }
      )
      .then((response) => {
        console.log("response:", response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("vaya...para que ha habido algun error");
      });

    alert(JSON.stringify(values, null, 2));
    console.log("submit", values);
    setSubmitting(false);
  };

  return (
    <div>
      <Link to="/">Volver</Link>

      <Typography variant="h3" gutterBottom align="center">
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
              {values.student.date_birth &&
                moment().diff(values.student.date_birth, "years") < 18 && (
                  <Custodian />
                )}
              <AcademicData cursmoduluf={cursmoduluf} values={values} />

              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Enviar
              </Button>
            </div>
            {/* <br />

            <div>
              VALUES:
              <pre>{JSON.stringify(values, null, 2)}</pre>
              ERRORS:
              <pre>{JSON.stringify(errors, null, 2)}</pre>
              TOUCHED:
              <pre>{JSON.stringify(touched, null, 2)}</pre>
            </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Enrolment;
