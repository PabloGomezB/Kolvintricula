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
import { mapValues } from "lodash";
import { useStyle } from "../Layout/styles";
import Revision from "./Revision";

const steps = [
  "Datos del alumno",
  "Datos del responsable",
  "Datos académicos",
  // "Revision",
];

const Enrolment = (props) => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  let studentData = {
    student: {
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
      // case 3:
      //   return <Revision values={values} />;
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
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

      if (activeStep === 0 && isAdult(values.student.date_birth)) {
        setActiveStep((previousActiveStep) => previousActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep + 1);
          return newSkipped;
        });
      }
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  function _handleBack(values) {
    if (activeStep === 2 && isAdult(values.student.date_birth)) {
      setActiveStep((prevActiveStep) => prevActiveStep - 2);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    // setActiveStep(activeStep + 1);
    console.log("submit", values);
  }
  // function _handleSubmit(values, actions) {
  //   if (isLastStep) {
  //     _submitForm(values, actions);
  //   } else {
  //     if (
  //       activeStep === 0 &&
  //       moment().diff(values.student.date_birth, "years") >= 18
  //     ) {
  //       setActiveStep((previousActiveStep) => previousActiveStep + 1);
  //     }
  //     setActiveStep((previousActiveStep) => previousActiveStep + 1);
  //     actions.setTouched({});
  //     actions.setSubmitting(false);
  //   }
  // }
  // const onSubmit = (values, { setSubmitting }) => {
  //   axios
  //     .post(
  //       `http://labs.iam.cat/~a18pabgombra/Kolvintricula/backend/public/api/enrolments/add`,
  //       {
  //         values,
  //       }
  //     )
  //     .then((response) => {
  //       console.log("response:", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("vaya...para que ha habido algun error");
  //     });
  //   alert(JSON.stringify(values, null, 2));
  //   console.log("submit", values);
  //   setSubmitting(false);
  // };

  return (
    <div>
      <Link to="/">Volver</Link>

      <Typography variant="h3" gutterBottom align="center">
        Matrícula
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
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
            <Step key={label} {...stepProps}>
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
        // onSubmit={_handleSubmit}
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
