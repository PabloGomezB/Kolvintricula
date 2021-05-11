import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import SelectField from "./SelectField";
import RadioButtons from "./RadioButtons";
import CheckboxField from "./CheckboxField";
import DatePicker from "./DatePicker.jsx";
// import ChakraInput from "./ChakraInput";

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
    // case "chakraInput":
    //   return <ChakraInput {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
