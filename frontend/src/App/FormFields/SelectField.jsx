import PropTypes from "prop-types";
import React from "react";
import { at } from "lodash";
import { useField } from "formik";

import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

/**
 * Componente que construye un select
 * @param {*} props
 * @returns
 */
function SelectField(props) {
  const { label, options, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, "touched", "error");
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }
  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ""}>
        {options.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}

SelectField.propTypes = {
  /** Label del select */
  label: PropTypes.any,
  /** Opciones del select */
  options: PropTypes.array.isRequired,
};

export default SelectField;
