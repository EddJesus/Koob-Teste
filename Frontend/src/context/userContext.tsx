import React, { createContext, useState, useEffect } from 'react';
import api from "../services/api";

interface UserContextData {
  students: StudentsData[];
  firstUse: Boolean;
  created: Boolean;
  updateComponent: Function;
}

interface StudentsData extends Object{
  first_name:string;
  last_name:string;
  age:number;
  class:string;
  schedule:string;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = (props: any) => {
  const [firstUse, setFirstUse] = useState<Boolean>(true);
  const [created, setCreated] = useState<Boolean>(false);
  const [students, setStudents] = useState<StudentsData[]>([]);

  function updateComponent(){
    setCreated(!created);
    window.location.reload();
  }

  useEffect(() => {
    async function checkUsers(){
      const response = await api.get('/students');
 
      if(response){
        const data:any = response.data;
        setStudents(data);
        setFirstUse(false)
      } 
    }


    checkUsers();
  }, []);



  return (
    <UserContext.Provider
      value={{students, firstUse, updateComponent, created }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
