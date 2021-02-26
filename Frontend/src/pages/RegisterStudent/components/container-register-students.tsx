import React from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";

import '../styles.css';

const ContainerStudents = (props: any) => {
  return (
    <>
        <Formik
          initialValues={props.initialValues}
          onSubmit={props.OnSubmit}
          validationSchema={props.validations}
        >
          <Form className="form-students">
            <Field name="first_name" placeholder="Primeiro Nome"></Field>
            <ErrorMessage name="first_name" render={(e) => <span className="caixas-error">{e}</span>}></ErrorMessage>

            <Field name="last_name" placeholder="Sobrenome"></Field>
            <ErrorMessage name="last_name" render={(e) => <span className="caixas-error">{e}</span>}></ErrorMessage>

            <Field name="age" placeholder="Idade"></Field>
            <ErrorMessage name="age" render={(e) => <span className="caixas-error">{e}</span>}></ErrorMessage>

            <Field as="select" name="class" placeholder="Série">
              <option value="1º Ano - Fundamental">1º Ano - Fundamental</option>
              <option value="2º Ano - Fundamental">2º Ano - Fundamental</option>
              <option value="3º Ano - Fundamental">3º Ano - Fundamental</option>
              <option value="4º Ano - Fundamental">4º Ano - Fundamental</option>
              <option value="5º Ano - Fundamental">5º Ano - Fundamental</option>
              <option value="6º Ano - Fundamental">6º Ano - Fundamental</option>
              <option value="7º Ano - Fundamental">7º Ano - Fundamental</option>
              <option value="8º Ano - Fundamental">8º Ano - Fundamental</option>
              <option value="9º Ano - Fundamental">9º Ano - Fundamental</option>
              <option value="1º Ano - Médio">1º Ano - Médio</option>
              <option value="2º Ano - Médio">2º Ano - Médio</option>
              <option value="3º Ano - Médio">3º Ano - Médio</option>
            </Field>

            <ErrorMessage name="class" render={(e) => <span className="caixas-error">{e}</span>}></ErrorMessage>

            <Field as="select" name="schedule" placeholder="Horário">
              <option value="Horário">Horário</option>
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </Field>
            <ErrorMessage name="schedule" render={(e) => <span className="caixas-error">{e}</span>}></ErrorMessage>

            <button className="register_student" type="submit">Cadastrar</button>
          </Form>
        </Formik>
    </>
  );
};

export default ContainerStudents;
