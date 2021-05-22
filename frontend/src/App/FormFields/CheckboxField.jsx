import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

/**
 * Componente que crear un checkbox a partir de las props.
 * @param {Object} props
 */
const CheckboxField = (props) => {
  return <Field type="checkbox" {...props} />;
};

CheckboxField.propTypes = {
  /** Props que sirven para construir el checkbox */
  props: PropTypes.object,
};
export default CheckboxField;
