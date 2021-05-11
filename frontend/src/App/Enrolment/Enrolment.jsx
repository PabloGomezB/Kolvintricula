import React from "react";

import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import FormikControl from "./components/FormikControl.jsx";
import { set } from "lodash";
import { FormControlLabel, FormGroup, Typography } from "@material-ui/core";
import CheckboxField from "./components/CheckboxField.jsx";

class Custodian {
  constructor() {
    this.custodian = "";
    this.name_lastname = "";
    this.nif = "";
    this.mobile_number = "";
    this.email = "";
  }
}

const cursmoduluf = [
  {
    curs: 1,
    moduls: [
      {
        modul_key: "mp1",
        name: "MP1. Implementacio de sistemes operatius",
        ufs: [
          { uf_key: "mp1uf1", name: "UF1" },
          { uf_key: "mp1uf2", name: "UF2" },
          { uf_key: "mp1uf3", name: "UF3" },
        ],
      },
      {
        modul_key: "mp2",
        name: "MP2. Gestió de sitemes operatius",
        ufs: [
          { uf_key: "mp2uf1", name: "UF1" },
          { uf_key: "mp2uf2", name: "UF2" },
          { uf_key: "mp2uf3", name: "UF3" },
        ],
      },
      {
        modul_key: "mp3",
        name: "MP3. Programació bàsica",
        ufs: [
          { uf_key: "mp3uf1", name: "UF1" },
          { uf_key: "mp3uf2", name: "UF2" },
          { uf_key: "mp3uf3", name: "UF3" },
        ],
      },
      {
        modul_key: "mp4",
        name: "MP4. Llenguatge de marques i sistemes de gestió d’informació",
        ufs: [
          { uf_key: "mp4uf1", name: "UF1" },
          { uf_key: "mp4uf2", name: "UF2" },
          { uf_key: "mp4uf3", name: "UF3" },
        ],
      },
      {
        modul_key: "mp7",
        name: "MP7. Planificació i administració de xarxes",
        ufs: [
          { uf_key: "mp7uf1", name: "UF1" },
          { uf_key: "mp7uf2", name: "UF2" },
          { uf_key: "mp7uf3", name: "UF3" },
        ],
      },
      {
        modul_key: "mp10",
        name: "MP10. Administració de sistemes gestors de bases de dades",
        ufs: [{ uf_key: "mp7uf1", name: "UF1" }],
      },
      {
        modul_key: "mp12",
        name: "MP12. Formació i orientació laboral",
        ufs: [
          { uf_key: "mp12uf1", name: "UF1" },
          { uf_key: "mp12uf2", name: "UF2" },
        ],
      },
      {
        modul_key: "mp13",
        name: "MP13. Empresa i iniciativa emprenedora",
        ufs: [{ uf_key: "mp13uf1", name: "UF1" }],
      },
    ],
  },
  {
    curs: 2,
    moduls: [
      {
        modul_key: "mp1",
        name: "MP1. Implementacio de sistemes operatius",
        ufs: [{ uf_key: "mp1uf4", name: "UF4" }],
      },
      {
        modul_key: "mp2",
        name: "MP2. Gestió de sitemes operatius",
        ufs: [{ uf_key: "mp2uf3", name: "UF3" }],
      },
      {
        modul_key: "mp5",
        name: "MP5. Fonaments de maquinari",
        ufs: [
          { uf_key: "mp5uf1", name: "UF1" },
          { uf_key: "mp5uf2", name: "UF2" },
          { uf_key: "mp5uf3", name: "UF3" },
        ],
      },
      {
        modul_key: "mp6",
        name: "MP6. Administració de sistemes operatius",
        ufs: [
          { uf_key: "mp6uf1", name: "UF1" },
          { uf_key: "mp6uf2", name: "UF2" },
        ],
      },
      {
        modul_key: "mp8",
        name: "MP8. Servei de xarxa i Internet",
        ufs: [
          { uf_key: "mp8uf1", name: "UF1" },
          { uf_key: "mp8uf2", name: "UF2" },
          { uf_key: "mp8uf3", name: "UF3" },
          { uf_key: "mp8uf4", name: "UF4" },
        ],
      },
      {
        modul_key: "mp9",
        name: "MP9. Implantació d’aplicacions web",
        ufs: [
          { uf_key: "mp9uf1", name: "UF1" },
          { uf_key: "mp9uf2", name: "UF2" },
        ],
      },
      {
        modul_key: "mp10",
        name: "MP10. Administració de sistemes gestors de bases de dades",
        ufs: [{ uf_key: "mp10uf2", name: "UF2" }],
      },
      {
        modul_key: "mp11",
        name: "MP11. Seguretat i alta disponibilitat",
        ufs: [
          { uf_key: "mp11uf1", name: "UF1" },
          { uf_key: "mp11uf2", name: "UF2" },
          { uf_key: "mp11uf3", name: "UF3" },
          { uf_key: "mp11uf4", name: "UF4" },
        ],
      },
      {
        modul_key: "mp14",
        name: "MP14. Projecte d’administració de sistemes informàtics en xarxa",
        ufs: [{ uf_key: "mp14uf1", name: "UF1" }],
      },
      {
        modul_key: "mp15",
        name: "MP15. Formació en centres de treball (FCT)",
        ufs: [{ uf_key: "mp15fct", name: "Formació en centres de treball" }],
      },
      {
        modul_key: "mp16",
        name: "MP16. Ciberseguretat i Hacking ètic",
        ufs: [
          { uf_key: "mp16uf1", name: "UF1" },
          { uf_key: "mp16uf2", name: "UF2" },
        ],
      },
      {
        modul_key: "mp17",
        name: "MP17. Seguretat en sistemes, xarxes i serveis",
        ufs: [
          { uf_key: "mp17uf1", name: "UF1" },
          { uf_key: "mp17uf2", name: "UF2" },
          { uf_key: "mp17uf3", name: "UF3" },
          { uf_key: "mp17uf4", name: "UF4" },
        ],
      },
    ],
  },
];

const Enrolment = () => {
  const initialValues = {
    student: {
      name: "",
      last_name1: "",
      last_name2: "",
      nif: "",
      mobile_number: "",
      email: "",
      date_birth: "",
    },
    // custodian: {
    //   custodian: "",
    //   name_lastname: "",
    //   nif: "",
    //   mobile: "",
    //   email: "",
    // },
    custodians: [],
    academic_data: {
      course: 1,
      moduluf: [
        // { mp1: [] },
        // { mp2: [] },
        // { mp3: [] },
        // { mp4: [] },
        // { mp5: [] }, //
        // { mp6: [] }, //
        // { mp7: [] },
        // { mp8: [] }, //
        // { mp9: [] }, //
        // { mp10: [] },
        // { mp11: [] }, //
        // { mp12: [] },
        // { mp13: [] },
        // { mp14: [] }, //
        // { mp15: [] }, //
        // { mp16: [] }, //
        // { mp17: [] }, //
      ],
    },
  };

  const validationSchema = Yup.object({
    student: Yup.object().shape({
      name: Yup.string().max(15, "Máximo 15 carácteres.").required("Requerido"),
      last_name1: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido"),
      last_name2: Yup.string()
        .max(15, "Máximo 15 carácteres.")
        .required("Requerido"),
      nif: Yup.string().required("Requerido"),
      mobile_number: Yup.number()
        .required("Requerido")
        .test("len", "Ha de ser de 9 digitos", (val) => {
          if (val !== undefined) {
            return val.toString().length === 9;
          }
        }),
      email: Yup.string().email("Email no válido.").required("Requerido"),
      date_birth: Yup.date().required("Requerido").nullable(),
    }),
    custodians: Yup.array().of(
      Yup.object().shape({
        custodian: Yup.string()
          .matches(/(p|m|t)/, "Elige una opción válida.")
          .required("Requerido"),
        name_lastname: Yup.string()
          .required("Requerido")
          .max(50, "Máximo 50 carácteres."),
        nif: Yup.string().required("Requerido"),
        mobile_number: Yup.number()
          .test("len2", "Ha de ser de 9 digitos", (val) => {
            if (val !== undefined) {
              return val.toString().length === 9;
            }
          })
          .required("Requerido"),
        email: Yup.string().email("Email no válido").required("Requerido"),
      })
    ),
    academic_data: Yup.object().shape({
      course: Yup.number().equals([1, 2]).required("Requerido"),
    }),
  });

  const onSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    console.log("submit", values);
    setSubmitting(false);
  };

  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Matrícula
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, isValid, isSubmitting, setFieldValue }) => (
          <Form>
            <div>
              <div>
                <Typography variant="h3" gutterBottom>
                  Datos del alumno
                </Typography>
                <FormikControl
                  control="input"
                  type="text"
                  label="Primer nombre: "
                  name="student.name"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Primer apellido: "
                  name="student.last_name1"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Segundo apellido: "
                  name="student.last_name2"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="NIF: "
                  name="student.nif"
                />
                <FormikControl
                  control="input"
                  type="email"
                  label="Email: "
                  name="student.email"
                />
                <FormikControl
                  control="input"
                  type="number"
                  label="Movil: "
                  name="student.mobile_number"
                />
                <FormikControl
                  control="date"
                  label="Fecha de nacimiento: "
                  name="student.date_birth"
                />
              </div>
              {moment().diff(values.student.date_birth, "years") < 18 && (
                <div>
                  <Typography variant="h3" gutterBottom>
                    Datos de la/s persona/s responsable/s
                  </Typography>
                  <FieldArray name="custodians">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { custodians } = values;
                      return (
                        <div>
                          {custodians &&
                            custodians.length > 0 &&
                            custodians.map((custodiansItem, index) => (
                              <div key={index}>
                                <FormikControl
                                  control="select"
                                  label=""
                                  name={`custodians[${index}].custodian`}
                                  options={[
                                    { label: "None", value: null },
                                    { label: "Padre", value: "padre" },
                                    { label: "Madre", value: "madre" },
                                    { label: "Tutor/a legal", value: "tutor" },
                                  ]}
                                />

                                <FormikControl
                                  control="input"
                                  type="text"
                                  label="Nombre y apellidos: "
                                  name={`custodians[${index}].name_lastname`}
                                />

                                <FormikControl
                                  control="input"
                                  type="text"
                                  label="NIF: "
                                  name={`custodians[${index}].nif`}
                                />

                                <FormikControl
                                  control="input"
                                  type="number"
                                  label="Telefono movil: "
                                  name={`custodians[${index}].mobile_number`}
                                />

                                <FormikControl
                                  control="input"
                                  type="text"
                                  label="Email: "
                                  name={`custodians[${index}].email`}
                                />
                                <button
                                  type="button"
                                  onClick={() => remove(index)} // remove a friend from the list
                                >
                                  -
                                </button>
                              </div>
                            ))}
                          {custodians.length < 2 && (
                            <button
                              type="button"
                              onClick={() => push(new Custodian())}
                            >
                              Añadir un responsable
                            </button>
                          )}
                        </div>
                      );
                    }}
                  </FieldArray>
                </div>
              )}
              <div>
                <Typography variant="h3" gutterBottom>
                  Datos academicos
                </Typography>
                <FieldArray name="academic_data.moduluf">
                  <div>
                    <div>
                      <FormikControl
                        control="select"
                        label=""
                        name="academic_data.course"
                        options={[
                          { label: "1er Curso", value: 1 },
                          { label: "2ndo Curso", value: 2 },
                        ]}
                      />
                    </div>

                    {values.academic_data.course === 1 ||
                    values.academic_data.course === 2
                      ? cursmoduluf[values.academic_data.course - 1].moduls.map(
                          (modul, index) => {
                            return (
                              <div key={modul.modul_key}>
                                <Typography variant="body1" gutterBottom>
                                  {modul.name}
                                </Typography>
                                {modul.ufs.map((uf) => {
                                  return (
                                    <FormGroup row="3" key={uf.uf_key}>
                                      <FormikControl
                                        control="checkbox"
                                        name={`academic_data.moduluf[${index}].${modul.modul_key}.${uf.uf_key}`}
                                        label={uf.name}
                                      />
                                    </FormGroup>
                                  );
                                })}
                              </div>
                            );
                          }
                        )
                      : null}
                  </div>
                </FieldArray>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Enrolment;
