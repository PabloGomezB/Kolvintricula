import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import SelectField from "./SelectField";
import RadioButtons from "./RadioButtons";
import CheckboxField from "./CheckboxField";
import DatePicker from "./DatePicker.jsx";
/**
 * Componente que construye otro componente inputs para el formulario
 * @param {*} props
 * @returns
 */
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <SelectField {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxField {...rest} />;
    case "date":
      return <DatePicker {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
