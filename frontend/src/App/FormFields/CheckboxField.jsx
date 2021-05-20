import React from "react";
import { Field, useField } from "formik";
import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
/**
 * Componente que crear un checkbox a partir de las props.
 * @param {Object} props
 */
export default function CheckboxField(props) {
  const { label, ...rest } = props;
  const [field, helper, helper2] = useField(props);
  console.log(useField(props));
  const { setValue } = helper2;
  /**
   * Cambia el valor
   * @param {Event} e
   */
  function _onChange(e) {
    setValue(e.target.checked);
  }

  return (
    // <FormControl {...rest}>
    //   <FormControlLabel
    //     control={
    //       <Checkbox
    //         {...field}
    //         onChange={_onChange}
    //         value={field.checked}
    //         checked={field.checked}
    //       />
    //     }
    //     label={label}
    //   />
    // </FormControl>
    <Field type="checkbox" {...rest} />
  );
}
