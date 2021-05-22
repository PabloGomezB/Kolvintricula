import React, { useState, useEffect } from "react";
import { useField } from "formik";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import es from "date-fns/locale/es";
import PropTypes from "prop-types";

/**
 * Componente que crea un calendario para que elijas una fecha
 * @param {*} props
 * @returns
 */
const DatePickerField = (props) => {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setSelectedDate(date);
    }
  }, [value]);
  /**
   * Al detectar un cambio en el input guarda el date
   * @param {*} date
   */
  function _onChange(date) {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
      <DatePicker
        {...field}
        {...props}
        value={selectedDate}
        onChange={_onChange}
        error={isError}
        invalidDateMessage={isError && error}
        helperText={isError && error}
        format="d MMMM yyyy"
        disableFuture
      />
    </MuiPickersUtilsProvider>
  );
};

DatePickerField.propTypes = {
  /** Props para construir el DatePicker */
  props: PropTypes.object,
};

export default DatePickerField;
