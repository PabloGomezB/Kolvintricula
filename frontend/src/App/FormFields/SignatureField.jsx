import { Field } from "formik";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useStyle } from "../../App/Layout/styles";

export const SignatureField = () => {
  const signatureRef = useRef({});
  const classes = useStyle();

  function onChange(setFieldValue) {
    setFieldValue(
      "consent.firma",
      signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
    );
  }

  return (
    //Muestra el campo que contiene la firma
    <div>
      <Field name="consent.firma">
        {({
          field,
          form: { touched, errors, setFieldValue },
          meta,
        }) => (
          <>
            <h4 align="center">Para continuar, firma aquí por favor</h4>
            <SignatureCanvas
              canvasProps={{
                width: 500,
                height: 200,
                style: { border: "1px solid #000000", marginLeft: '23%' },
              }}
              ref={signatureRef}
              onEnd={() => onChange(setFieldValue)}
            />
            {/* Muestra un mensaje de error si es que no se rellena el campo */}
            {meta.touched && meta.error && (
              <div className={classes.error}>{meta.error}</div>
            )}
          </>
        )}
      </Field>
    </div>
  );
};
