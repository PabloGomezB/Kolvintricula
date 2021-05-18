import { Grid, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import FormikControl from "../../FormFields/FormikControl";

export const Student = () => {
  const [imagePreviewUrl, setimagePreviewUrl] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // TODO: do something with -> this.state.file
  //   console.log('handle uploading-', file);
  // }

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      //setFile(file);
      setimagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = <img style={{ float: 'right', height: '100px', width: '100px' }} src={imagePreviewUrl} alt="Artwork" />;
  } else {
    $imagePreview = (
      <div className="previewText"></div>
    );
  }

  console.log($imagePreview.props.src);
  return (
    <div>
      <div style={{ float: 'right', backgroundImage: 'url("https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png")', backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', height: '100px', width: '100px', marginRight: '300px' }} className="imgPreview">{$imagePreview}</div>
      <Typography variant="h4" gutterBottom>
        Datos del alumno
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="text"
            label="Primer nombre: "
            name="student.name"
          />
        </Grid>

        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="text"
            label="Primer apellido: "
            name="student.last_name1"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="text"
            label="Segundo apellido: "
            name="student.last_name2"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="text"
            label="NIF: "
            name="student.nif"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="email"
            label="Email: "
            name="student.email_personal"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="number"
            label="Movil: "
            name="student.mobile_number"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="date"
            label="Fecha de nacimiento: "
            name="student.date_birth"
          />
        </Grid>
      </Grid>
      <div>
        <form>
          <input
            style={{ display: 'none' }}
            type="file"
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
        </form>
      </div>
    </div>
  );
};
export default Student;
