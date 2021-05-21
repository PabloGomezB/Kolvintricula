import PropTypes from "prop-types";
import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

/**
 * Componente que construye un text area
 * @param {*} props
 * @returns
 */
function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

Textarea.propTypes = {
  /** Label del text area */
  label: PropTypes.any,
  /** Value en el que se guardará  */
  name: PropTypes.any,
};

export default Textarea;
