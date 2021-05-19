// import React from "react";
// import { Field, ErrorMessage } from "formik";
// import TextError from "./TextError";
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

function SelectField(props) {
  // const { label, name, options, ...rest } = props;
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
    // <div className="form-control">
    //   <label htmlFor={name}>{label}</label>
    //   <Field as="select" id={name} name={name} {...rest}>
    //     {options.map((option) => {
    //       return (
    //         <option key={option.value} value={option.value}>
    //           {option.key}
    //         </option>
    //       );
    //     })}
    //   </Field>
    //   <ErrorMessage component={TextError} name={name} />
    // </div>
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

export default SelectField;
