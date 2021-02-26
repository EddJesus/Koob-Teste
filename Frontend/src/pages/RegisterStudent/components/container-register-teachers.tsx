import React from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";

import '../styles.css';

const ContainerTeachers: React.FC = (props: any) => {
  return (
    <>
      <div className="container-students">
        <Formik
          initialValues={props.initialValues}
          onSubmit={props.OnSubmit}
          validationSchema={props.validations}
        >
          <Form className="form-students">
            <Field name="first_name" placeholder="Primeiro Nome"></Field>
            <ErrorMessage name="first_name"></ErrorMessage>

            <Field name="last_name" placeholder="Sobrenome"></Field>
            <ErrorMessage name="last_name"></ErrorMessage>

            <Field name="age" placeholder="Idade"></Field>
            <ErrorMessage name="age"></ErrorMessage>

            <Field name="subject" placeholder="Série"></Field>
            <ErrorMessage name="subject"></ErrorMessage>

            <Field name="dispobinility_schedule" placeholder="Disponibilidade de horário"></Field>
            <ErrorMessage name="dispobinility_schedule"></ErrorMessage>

            <button className="register_student" type="submit">Cadastrar</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ContainerTeachers;
