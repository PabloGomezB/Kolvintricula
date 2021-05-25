import { Field, useFormikContext } from "formik";
import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useStyle } from "../Layout/styles";

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
            <SignatureCanvas
              clearOnResize={false}
              canvasProps={{ className: classes.canvasFirma }}
              ref={signatureRef}
              onEnd={() => onChange()}
            />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </>
        )}
      </Field>
    </div>
  );
};
