import { Field } from "formik";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export const SignatureField = () => {
  const signatureRef = useRef({});

  function onChange(setFieldValue) {
    setFieldValue(
      "consent.firma",
      signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
    );
  }

  return (
    <div>
      <Field name="consent.firma">
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <>
            <SignatureCanvas
              canvasProps={{
                width: 500,
                height: 200,
                style: { border: "1px solid #000000", marginLeft: '25%' },
              }}
              ref={signatureRef}
              onEnd={() => onChange(setFieldValue)}
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
