import { ErrorMessage, Field, Form } from "formik";

const Student = ({ params }) => {
  return (
    <div>
      <Form>
        <div>
          <label htmlFor="student.name">Primer nombre:</label>
          <Field name="student.name" type="text"></Field>
          <ErrorMessage name="student.name"></ErrorMessage>
        </div>
        <div>
          <label htmlFor="student.last_name1">Primer apellido:</label>
          <Field name="student.last_name1" type="text"></Field>
          <ErrorMessage name="student.last_name1"></ErrorMessage>
        </div>
        <div>
          <label htmlFor="student.last_name2">Segundo apellido:</label>
          <Field name="student.last_name2" type="text"></Field>
          <ErrorMessage name="student.last_name2"></ErrorMessage>
        </div>
        <div>
          <label htmlFor="student.nif">NIF:</label>
          <Field name="student.nif" type="text"></Field>
          <ErrorMessage name="student.nif"></ErrorMessage>
        </div>
        <div>
          <label htmlFor="student.email">Email:</label>
          <Field name="student.email" type="email"></Field>
          <ErrorMessage name="student.email"></ErrorMessage>
        </div>
        <div>
          <label htmlFor="student.mobile_number">Movil:</label>
          <Field name="student.mobile_number" type="number"></Field>
          <ErrorMessage name="student.mobile_number"></ErrorMessage>
        </div>
        <div>
          <label htmlFor="student.date_birth">Fecha de nacimiento:</label>
          <Field name="student.date_birth" type="date"></Field>
          <ErrorMessage name="student.date_birth"></ErrorMessage>
        </div>
        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
};
export default Student;
