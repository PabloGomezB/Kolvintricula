import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Checkbox, FormControlLabel } from "@material-ui/core";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  console.log("checkbox props", props);

  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          console.log("checkbox field", field);
          console.log("checkbox field.value", field.value);
          return options.map((option) => {
            console.log("checkbox option", option);

            return (
              <React.Fragment key={option.key}>
                {/* <input
                  type="checkbox"
                  id={option.key}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.key}>{option.value}</label> */}

                {/* <FormControlLabel
                  control={
                    <Checkbox
                      checked={field.value.includes(option.value)}
                      {...field}
                      {...rest}
                      color="primary"
                    />
                  }
                  label={option.value}
                /> */}
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default CheckboxGroup;
