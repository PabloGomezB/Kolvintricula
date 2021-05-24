import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import moment from "moment";
import { Link } from "react-router-dom";
import Student from "./Student";
import Custodian from "./Custodian";
import AcademicData from "./AcademicData";
import { Alert } from "@material-ui/lab";
import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";
import Consent from "./Consent";

import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Snackbar,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
} from "@material-ui/core";
import validationSchema from "./FormModel/validationSchema";
import axios from "axios";
import { useStyle } from "../Layout/styles";
import Revision from "./Revision";

const steps = [
  "Alumno",
  "Responsable",
  "Académicos",
  "Consentimiento",
  "Revision",
];
/**
 * Componente que construye el formulario entero
 * @param {*} props
 * @returns
 */
const Enrolment = (props) => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const [messageError, setMessageError] = useState(0);
  const [showAlert, setShowAlert] = useState(0);

  const [enrolmentSubmited, setEnrolmentSubmited] = useState(0);
  const [successfullyEnrolled, setSuccessfullyEnrolled] = useState(0);
  const [emailPedralbes, setEmailPedralbes] = useState(0);

  const [cursmoduluf, setCursmoduluf] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://labs.iam.cat/~a18rubonclop/Kolvintricula/backend/public/api/courses/${props.courseData.id}/modules`
      )
      .then((res) => {
        setCursmoduluf(res.data);
      });
  }, [props.courseData.id]);

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
      photo_path: null,
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
      course: {
        type: props.courseData.type,
        name: props.courseData.name,
        description: props.courseData.description,
      },
      year: "",
      modules: {
        // MP1: [],
        // MP2: [],
        // MP3: [],
        // MP4: [],
        // MP5: [],
        // MP6: [],
        // MP7: [],
        // MP8: [],
        // MP9: [],
        // MP10: [],
        // MP12: [],
        // MP13: [],
        // MP14: [],
        // MP15: [],
      },
    },
    consent: {
      alergias: "",
      enfermedades: "",
      medicamentos: "",
      otros: "",
      c2: "",
      c3: "",
      c4: "",
      c5: "",
      c6: "",
      c7: "",
      firma: "",
    },
  };
  // Si se reciben los props (existe student) guardamos los datos de props en el objeto local studentData para poder procesar los "values"
  // Sin este control en la variable global "values" se almacenarían datos de un objeto "props.studentData[0]" que es "undefined"
  if (props.studentData !== 0) studentData.student = props.studentData[0];

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <Student nif={studentData.student.nif} />;
      case 1:
        return <Custodian />;
      case 2:
        return <AcademicData cursmoduluf={cursmoduluf} />;
      case 3:
        return <Consent />;
      case 4:
        return <Revision />;
      default:
        return (
          <div>
            Paso desconocido. No deberías estar aquí. Esto es una zona
            desconocida. No nos hacemos responables a partir de este punto. Tu
            eliges.
          </div>
        );
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
      if (activeStep === 2 && isAdult(values.student.date_birth)) {
        values.custodians = [];
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
        nextStep(values, actions);
      }
    }
  };

  function nextStep(values, actions) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 0 && isAdult(values.student.date_birth)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep + 1);
        return newSkipped;
      });
    }
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

    document.body.style.cursor = "wait";

    console.log("submit", values);

    axios
      .post(
        `http://labs.iam.cat/~a18pabgombra/Kolvintricula/backend/public/api/enrolments/add`,
        {
          values,
        }
      )
      .then((response) => {
        console.log("response:", response.data);
        setEnrolmentSubmited(true);
        document.body.style.cursor = "default";

        if (
          response.data.addStudentResult.response === "OK" &&
          response.data.addCustodiansResult.response === "OK" &&
          response.data.addEnrolmentResult.response === "OK"
        ) {
          setEmailPedralbes(response.data.addStudentResult.email_pedralbes);
          setSuccessfullyEnrolled(true);
        } else {
          setSuccessfullyEnrolled(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setSuccessfullyEnrolled(false);
      })
      .then(function () {
        actions.setSubmitting(false);
      });
  }

  const closeAlert = (event, reason) => {
    setShowAlert(false);
  };

  function closeModal() {
    setEnrolmentSubmited(false);
  }

  return (
    <div>
      <Button component={Link} to="/" variant="contained">
        Volver al inicio
      </Button>

      <Typography variant="h3" gutterBottom align="center">
        Matrícula para {props.courseData.name}
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

            {_renderStepContent(activeStep)}
            <div className={classes.alignRight}>
              {activeStep !== 0 && (
                <Button
                  variant="contained"
                  disabled={isSubmitting}
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
      {!!enrolmentSubmited && (
        <div>
          {successfullyEnrolled ? (
            <Dialog
              open={enrolmentSubmited}
              // onEnter={console.log("dialog success.")}
            >
              <DialogTitle className={classes.dialogTitleSuccess}>
                ¡Te has matriculado con éxito!
              </DialogTitle>
              <DialogContent className={classes.dialogContentSuccess}>
                Tu email de alumno es:{" "}
                <Box fontWeight="fontWeightBold">{emailPedralbes}</Box>
                <Button
                  component={Link}
                  to="/"
                  color="primary"
                  className={classes.dialogButtonSuccess}
                >
                  <DoneOutlineTwoToneIcon style={{ color: "green" }} />
                </Button>
              </DialogContent>
            </Dialog>
          ) : (
            <Dialog
              open={enrolmentSubmited}
              // onEnter={console.log("dialog error.")}
            >
              <DialogTitle className={classes.dialogTitleError}>
                Algo ha ido mal...
              </DialogTitle>
              <DialogContent className={classes.dialogContentError}>
                Porfavor escribe a: soporte@inspedralbes.cat
                <Button onClick={closeModal} color="primary">
                  Volver
                </Button>
              </DialogContent>
            </Dialog>
          )}
        </div>
      )}
    </div>
  );
};

Enrolment.propTypes = {
  /** ID del curso */
  idCourse: PropTypes.any.isRequired,
  /** Datos del estudiante */
  studentData: PropTypes.any,
};
export default Enrolment;
