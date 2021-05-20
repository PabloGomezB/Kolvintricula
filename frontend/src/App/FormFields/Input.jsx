import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import { TextField } from "@material-ui/core";
/**
 * Componente que renderiza un input text
 * @param {*} props
 * @returns
 */
const Input = (props) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);
  /**
   * Renderiza el mensaje de error
   * @returns
   */
  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      type="text"
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
};

export default Input;
