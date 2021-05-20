import React from "react";
import { useField } from "formik";
import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
/**
 * Componente que crear un checkbox a partir de las props.
 * @param {Object} props
 */
export default function CheckboxField(props) {
  const { label, ...rest } = props;
  const [field, helper] = useField(props);
  const { setValue } = helper;
  /**
   * Cambia el valor
   * @param {Event} e
   */
  function _onChange(e) {
    setValue(e.target.checked);
  }

  return (
    <FormControl {...rest}>
      <FormControlLabel
        control={
          <Checkbox
            {...field}
            onChange={_onChange}
            value={field.checked}
            checked={field.checked}
          />
        }
        label={label}
      />
    </FormControl>
  );
}
