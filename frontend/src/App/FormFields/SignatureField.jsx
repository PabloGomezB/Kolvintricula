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
    setFieldValue(
      "consent.firma",
      signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
    );
    setSignature(
      signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
    );
  }

  return (
    <div className={classes.alignCenter}>
      <Field name="consent.firma">
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
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
    </div>
  );
};
