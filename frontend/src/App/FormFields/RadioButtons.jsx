import PropTypes from "prop-types";
import React from "react";
import { useField } from "formik";

import {
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

/**
 * Componente radio button
 * @param {*} props
 * @returns
 */
function RadioButtons(props) {
  const [field, helper, helper2] = useField(props);
  const { label, name, options, ...rest } = props;

  const isError = helper.touched && helper.error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText error={isError}>{helper.error}</FormHelperText>;
    }
  }
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        name={field.name}
        value={field.value}
        onChange={(event) => helper2.setValue(event.target.value)}
      >
        {options.map((item) => (
          <FormControlLabel
            control={<Radio></Radio>}
            key={item.key}
            value={item.value}
            label={item.key}
            {...rest}
          />
        ))}
      </RadioGroup>
      {_renderHelperText()}
    </>
  );
}

RadioButtons.propTypes = {
  /** Label del radio button */
  label: PropTypes.any,
  /** Donde se va aguardar en el value de formik */
  name: PropTypes.any,
  /** Las opciones que pueden ser elegidas */
  options: PropTypes.array.isRequired,
};

export default RadioButtons;
