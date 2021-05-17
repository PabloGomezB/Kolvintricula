import { Grid } from "@material-ui/core";
import React from "react";

export default function Revision({ values }) {
  return (
    <div>
      <div>Alumno</div>
      <Grid container spacing={3}>
        {Object.keys(values.student).map((key, index) => {
          return (
            <Grid item xs={6}>
              {values.student[key]}
            </Grid>
          );
        })}
      </Grid>
      <div>Responsables</div>
      <Grid container spacing={3}>
        {values.custodians.map((custodian, index) => {
          return (
            <>
              {/* <div>Responsable {index + 1}</div> */}
              {Object.keys(custodian).map((key, index) => {
                return (
                  <Grid item xs={6}>
                    {custodian[key]}
                  </Grid>
                );
              })}
            </>
          );
        })}
      </Grid>
      {/* {JSON.stringify(values, null, 2)} */}
    </div>
  );
}
