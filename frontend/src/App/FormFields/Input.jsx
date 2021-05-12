import React from "react";
import { at } from "lodash";
import { Field, ErrorMessage, useField } from "formik";
import TextError from "./TextError";
import { TextField } from "@material-ui/core";

function Input(props) {
  // const { label, name, ...rest } = props;
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }
  return (
    // <div className="form-control">
    //   <label htmlFor={name}>{label}</label>
    //   <Field id={name} name={name} {...rest} />
    //   <ErrorMessage component={TextError} name={name} />
    // </div>

    <TextField
      type="text"
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}

export default Input;
