import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FormikControl from "../../FormFields/FormikControl";
import { Field, useFormikContext } from "formik";
/**
 * Componente que construye el paso de Datos del estudiante
 * @param {*} props
 * @returns
 */
export const Student = (props) => {
  const { values, submitForm } = useFormikContext();
  const [imagePreviewUrl, setimagePreviewUrl] = useState(
    values.student.photo_path
  );

  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      props.setFieldValue("student.photo_path", reader.result);
      setimagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const setImagePreview = () => {
    if (imagePreviewUrl) {
      return (
        <img
          style={{ height: "100px", width: "100px", borderRadius: "50px" }}
          src={imagePreviewUrl}
          alt="Imagen cambiada"
        />
      );
    } else {
      return (
        <img
          style={{
            backgroundImage:
              'url("https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "50px",
            height: "100px",
            width: "100px",
          }}
          alt=""
        />
      );
    }
  };

  return (
    <div>
      <div style={{ float: "right" }}>
        <div
          style={{
            height: "100px",
            width: "100px",
          }}
          className="imgPreview"
        >
          {setImagePreview()}
        </div>

        <div>
          <Field name="student.photo_path">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="contained-button-file"
                  onChange={(e) => handleImageChange(e)}
                />
                {meta.touched && meta.error && (
                  <div className="error">{meta.error}</div>
                )}
              </>
            )}
          </Field>
        </div>

        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Subir foto
          </Button>
        </label>
      </div>

      <Typography variant="h4" gutterBottom>
        Datos del alumno
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="text"
            label="Primer nombre: "
            name="student.name"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="text"
            label="Primer apellido: "
            name="student.last_name1"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="text"
            label="Segundo apellido: "
            name="student.last_name2"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {props.nif.length === 0 ? (
            <FormikControl
              control="input"
              type="text"
              label="NIF: "
              name="student.nif"
              fullWidth
            />
          ) : (
            <FormikControl
              control="input"
              type="text"
              label="NIF: "
              name="student.nif"
              fullWidth
              disabled
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="email"
            label="Email: "
            name="student.email_personal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="number"
            label="Movil: "
            name="student.mobile_number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="date"
            label="Fecha de nacimiento: "
            name="student.date_birth"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

Student.propTypes = {
  setFieldValue: PropTypes.func,
};
export default Student;
