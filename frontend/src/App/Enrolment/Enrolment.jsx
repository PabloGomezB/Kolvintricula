import React, { useState } from "react";
import { Form, Formik } from "formik";
import moment from "moment";
import { Link } from "react-router-dom";
import Student from "./Student";
import Custodian from "./Custodian";
import cursmoduluf from "./cursmoduluf";
import AcademicData from "./AcademicData";
import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import validationSchema from "./FormModel/validationSchema";
import formInitialValues from "./FormModel/formInitialValues";
import axios from "axios";

const steps = ["Datos del alumno", "Datos del responsable", "Datos académicos"];

const Enrolment = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _renderStepContent(step, values) {
    switch (step) {
      case 0:
        return <Student />;
      case 1:
        return <Custodian />;
      case 2:
        return <AcademicData cursmoduluf={cursmoduluf} values={values} />;
      default:
        return <div>Not Found</div>;
    }
  }

  let studentData = {
    student: {
      name: "",
    },
    custodians: [],
    academic_data: {
      course: "",
      moduluf: [],
    },
  };
  // Si se reciben los props (existe student) guardamos los datos de props en el objeto local studentData para poder procesar los "values"
  // Sin este control en la variable global "values" se almacenarían datos de un objeto "props.studentData[0]" que es "undefined"
  if (props.studentData !== 0) studentData.student = props.studentData[0];

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    // setActiveStep(activeStep + 1);
    console.log("submit", values);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

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
      {/* <div style={{ float: 'right', backgroundImage: 'url("https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png")', backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', height: '100px', width: '100px' }} className="imgPreview">{$imagePreview}</div> */}

      <Typography variant="h3" gutterBottom align="center">
        Matrícula
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Formik
        initialValues={studentData}
        validationSchema={currentValidationSchema}
        onSubmit={_handleSubmit}
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
            {_renderStepContent(activeStep, values)}
            <div>
              {activeStep !== 0 && <Button onClick={_handleBack}>Back</Button>}
              <div>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {isLastStep ? "Enviar" : "Siguiente"}
                </Button>
                {isSubmitting && <CircularProgress size={24} />}
              </div>
            </div>
            
            {/* <Student />

            {values.student.date_birth &&
              moment().diff(values.student.date_birth, "years") < 18 && (
                <Custodian />
              )}
            <AcademicData cursmoduluf={cursmoduluf} values={values} /> */}

            {/* <Button variant="contained" type="submit" disabled={isSubmitting}>
              Enviar
            </Button> */}
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
