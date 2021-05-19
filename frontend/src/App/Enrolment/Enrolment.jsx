import React, { useState } from "react";
import { Form, Formik } from "formik";
import moment from "moment";
import { Link } from "react-router-dom";
import Student from "./Student";
import Custodian from "./Custodian";
import cursmoduluf from "./cursmoduluf";
import AcademicData from "./AcademicData";
import { Alert } from "@material-ui/lab";

import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Snackbar,
} from "@material-ui/core";
import validationSchema from "./FormModel/validationSchema";
import axios from "axios";
import { useStyle } from "../Layout/styles";
import Revision from "./Revision";

const steps = ["Alumno", "Responsable", "Académicos", "Revision"];

const Enrolment = (props) => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const [messageError, setMessageError] = useState(0);
  const [showAlert, setShowAlert] = useState(0);

  let studentData = {
    student: {
      updateStudent: false,
      name: "",
      last_name1: "",
      last_name2: "",
      date_birth: "",
      email_personal: "",
      nif: "",
      mobile_number: "",
    },
    custodians: [
      {
        type: "",
        nif: "",
        name: "",
        last_name1: "",
        last_name2: "",
        mobile_number: "",
        email: "",
      },
    ],
    academic_data: {
      course: "",
      moduluf: [],
    },
  };
  // Si se reciben los props (existe student) guardamos los datos de props en el objeto local studentData para poder procesar los "values"
  // Sin este control en la variable global "values" se almacenarían datos de un objeto "props.studentData[0]" que es "undefined"
  if (props.studentData !== 0) studentData.student = props.studentData[0];

  function _renderStepContent(step, values) {
    switch (step) {
      case 0:
        return <Student />;
      case 1:
        return <Custodian />;
      case 2:
        return <AcademicData cursmoduluf={cursmoduluf} values={values} />;
      case 3:
        return <Revision values={values} />;
      default:
        return <div>Not Found</div>;
    }
  }

  const isAdult = (date) => {
    return moment().diff(date, "years") >= 18;
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleNext = (values, actions) => {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      if (props.studentData !== 0) {
        // Seteamos a true así en backend redirigimos a update en vez de create
        values.student.updateStudent = true;
      }
      if (activeStep === 0 && props.studentData === 0) {
        // Checkear solo si el student es nuevo
        let studentError = false;
        let newStudentNif = values.student.nif;
        let newStudentEmail = values.student.email_personal;

        axios
          .post(
            `http://labs.iam.cat/~a18pabgombra/Kolvintricula/backend/public/api/students/find`,
            {
              nif: newStudentNif,
              email: newStudentEmail,
            }
          )
          .then((response) => {
            if (response.data.nifFound || response.data.emailFound) {
              if (response.data.nifFound) {
                setMessageError("Ya existe un alumno con este mismo NIF");
              } else {
                setMessageError("Ya existe un alumno con este mismo EMAIL");
              }
              setShowAlert(true);
              studentError = true;
            }
            if (studentError === false) {
              nextStep(values, actions);
            }
            actions.setTouched({});
            actions.setSubmitting(false);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        if (activeStep === 2) {
          if (isAdult(values.student.date_birth)) {
            values.custodians = [];
          }
        }
        nextStep(values, actions);
      }
    }
  };

  function nextStep(values, actions) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (isAdult(values.student.date_birth)) {
      setActiveStep((previousActiveStep) => previousActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep + 1);
        return newSkipped;
      });
    }
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    actions.setTouched({});
    actions.setSubmitting(false);
  }

  function _handleBack(values) {
    if (activeStep === 2 && isAdult(values.student.date_birth)) {
      setActiveStep((prevActiveStep) => prevActiveStep - 2);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  }

  async function _submitForm(values, actions) {
    if (!isAdult(values.student.date_birth) && values.custodians.length === 0) {
      alert("Añade un responsable");
      actions.setSubmitting(false);

      return;
    }
    await _sleep(1000);

    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    // setActiveStep(activeStep + 1);
    console.log("submit", values);

    axios
      .post(`http://127.0.0.1:8000/api/enrolments/add`, {
        values,
      })
      .then((response) => {
        console.log("response:", response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("vaya...parece que ha habido algun error...");
      });
  }

  const closeAlert = (event, reason) => {
    setShowAlert(false);
  };

  return (
    <div>
      <Button component={Link} to="/" variant="contained">
        Volver
      </Button>

      <Typography variant="h3" gutterBottom align="center">
        Matrícula
      </Typography>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ padding: "24px 0px 24px 0px" }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Opcional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} style={{ width: 24, padding: 0 }}>
              <StepLabel {...labelProps} align="center">
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Formik
        initialValues={studentData}
        validationSchema={currentValidationSchema}
        onSubmit={handleNext}
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
            {showAlert ? (
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={showAlert}
                autoHideDuration={3000}
                onClose={closeAlert}
              >
                <Alert onClose={closeAlert} variant="filled" severity="error">
                  {messageError}
                </Alert>
              </Snackbar>
            ) : null}

            {_renderStepContent(activeStep, values)}
            <div className={classes.alignRight}>
              {activeStep !== 0 && (
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={() => _handleBack(values)}
                >
                  Atrás
                </Button>
              )}
              <Button
                className={classes.btn}
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                color="primary"
              >
                {isLastStep ? "Enviar" : "Siguiente"}
              </Button>
              {isSubmitting && <CircularProgress size={24} />}
            </div>
            {/* <div>
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
