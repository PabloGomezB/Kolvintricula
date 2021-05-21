import PropTypes from "prop-types";
import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import TextError from "./TextError";
import {
  FormControlLabel,
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
  console.log(useField(props));
  const { label, name, options, ...rest } = props;
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
    </>
  );
}

RadioButtons.propTypes = {
  /** Label del radio button */
  label: PropTypes.any,
  /** Donde se va aguardar en el value de formik */
  name: PropTypes.any,
  /** Las opciones que pueden ser elegidas */
  options: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default RadioButtons;
