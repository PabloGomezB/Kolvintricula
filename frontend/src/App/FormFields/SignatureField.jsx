import { Button } from "@material-ui/core";
import { Field, useFormikContext } from "formik";
import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useStyle } from "../../App/Layout/styles";

export const SignatureField = () => {
  const classes = useStyle();

  const signatureRef = useRef({});
  const { values, setFieldValue } = useFormikContext();
  const [signature, setSignature] = useState(values.consent.firma);

  useEffect(() => {
    signatureRef.current.fromDataURL(signature);
  }, []);

  function onChange() {
    setFieldValue("consent.firma", signatureRef.current.toDataURL("image/jpg"));
    setSignature(signatureRef.current.toDataURL("image/jpg"));
  }

  function clear() {
    setFieldValue("consent.firma", "");
    setSignature("");
    signatureRef.current.clear();
  }
  return (
    //Muestra el campo que contiene la firma
    <div className={classes.alignCenter}>
      <Field name="consent.firma">
        {({ field, form: { touched, errors }, meta }) => (
          <>
            <h4 align="center">Para continuar, firma aquí por favor</h4>
            <SignatureCanvas
              clearOnResize={false}
              canvasProps={{ className: classes.canvasFirma }}
              ref={signatureRef}
              onEnd={() => onChange()}
            />
            {/* Muestra un mensaje de error si es que no se rellena el campo */}
            {meta.touched && meta.error && (
              <div className={classes.error}>{meta.error}</div>
            )}
          </>
        )}
      </Field>
      <div className={`${classes.dblock} ${classes.alignCenter}`}>
        <Button variant="contained" onClick={() => clear()}>
          Limpiar firma
        </Button>
      </div>
    </div>
  );
};
