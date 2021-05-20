import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import FormikControl from "../../FormFields/FormikControl";

export const Student = (props) => {

  const [imagePreviewUrl, setimagePreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      props.setFieldValue("student.photo_path", reader.result)
      setimagePreviewUrl(reader.result)
    };

    reader.readAsDataURL(file);
  };

  let imagePreview = "";
  if (imagePreviewUrl) {
    imagePreview = (
      <img
        style={{ height: "100px", width: "100px", borderRadius: "50px" }}
        src={imagePreviewUrl}
        alt="Imagen cambiada"
      />
    );
  } else {
    imagePreview = (
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

  return (
    <div>
      <div
        style={{
          float: "right",
          height: "100px",
          width: "100px",
          marginRight: "300px",
        }}
        className="imgPreview"
      >
        {imagePreview}
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
          { props.nif.length === 0 ? (
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
      <div>
        <input
          style={{ display: "none" }}
          name="student.photo_path"
          type="file"
          accept="image/*"
          id="contained-button-file"
          onChange={(e) => handleImageChange(e)}
        />
        {/* <label htmlFor="contained-button-file">
            <button
              onClick={(e) => handleSubmit(e)}
            >
              Upload Image
            </button>
          </label> */}
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Subir foto
          </Button>
        </label>
      </div>
    </div>
  );
};
export default Student;
