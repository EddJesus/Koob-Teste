import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import * as yup from "yup";
import history from '../../history';

import SkipBack from "../../assets/skip-back.svg";

import UserContext from '../../context/userContext';

import ContainerStudents from "./components/container-register-students";

import "./styles.css";

const Home: React.FC = () => {
  const [redirect, setRedirect] = useState(false);

  const { updateComponent } = useContext(UserContext);

  useEffect(() => {
    if (redirect === true) {
      setTimeout(() => {
        history.push("/list");
      }, 2000);
    }
  }, [redirect]);

  return (
    <>
      <div className="container">
        <Link onClick={() => updateComponent} className="show-students" to="/list">
          <img src={SkipBack} alt="" />
          Visualizar alunos
        </Link>
        <h1>Cadastre um aluno</h1>
        <div className="container-register-students">
          <ContainerStudents
            initialValues={{
              first_name: "",
              last_name: "",
              age: "",
              class: "",
              schedule: "",
            }}
            OnSubmit={async (values: any) => {
              await api
                .post("/students", {
                  headers: {
                    content_type: "application/json",
                  },
                  first_name: values.first_name,
                  last_name: values.last_name,
                  age: values.age,
                  schedule: values.schedule,
                  class: values.class,
                })
                .then((res:any) => {
                  console.log(res.status);
                  if(res.status === 201){
                    window.alert("Usuário criado com sucesso!");
                    updateComponent();
                    setRedirect(true);
                  }
                })
                .catch((error: any) => {
                  console.log(error);
                });
            }}
            validations={yup.object().shape({
              first_name: yup.string().required("*Campo necessário").min(2, "*Nome deve conter pelo menos 2 caracteres"),
              last_name: yup.string().required("*Campo necessário"),
              age: yup
                .number()
                .typeError("Idade inválida")
                .integer("Idade inválida")
                .positive("Idade inválida")
                .required("*Campo necessário")
                .min(1, "Idade inválida"),
              class: yup.string().required("*Campo necessário"),
              schedule: yup.string().required("*Campo necessário"),
            })}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
