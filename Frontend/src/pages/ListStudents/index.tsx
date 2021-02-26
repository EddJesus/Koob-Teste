import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import UserContext from "../../context/userContext";

import AddStudent from '../../assets/plus-circle.svg'

import ContainerStudents from "./components/container-list-students";

const ListStudents: React.FC = () => {
  const { students, created, updateComponent } = useContext(UserContext);


  if(created === true){
    updateComponent();
  }

  return (
    <>
      <div>
        <div className="container">
          <h1>Alunos</h1>
          {students.length > 0 ? (
            <ContainerStudents></ContainerStudents>

          ) : (
            <h1>Não possui nenhum aluno no momento... Cadastre agora!</h1>
          )
          
        }
          <Link className="add-students" to="/"><img src={AddStudent} alt=""/>Cadastrar novo aluno</Link>
        </div>
      </div>
    </>
  );
};

export default ListStudents;
