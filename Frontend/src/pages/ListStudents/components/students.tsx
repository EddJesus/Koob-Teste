import React, { useContext } from "react";
import UserContext from "../../../context/userContext";

import '../styles.css';

const Students: React.FC = () => {
  const { students } = useContext(UserContext);

  return (
    <>
      {students.map((student) => (
        <>
          <div className="student-profile">
            <div className="student-profile-header">
              <h4>
                {student.first_name} {student.last_name}
              </h4>
            </div>
            <div className="student-profile-body">
              <p className="p2">Idade: </p> <p>{student.age}</p>
              <p className="p2">Classe: </p> <p>{student.class}</p>
              <p className="p2">Periodo: </p> <p>{student.schedule}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Students;
