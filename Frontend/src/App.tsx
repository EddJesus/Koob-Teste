import React from "react";
import Router from './routes'
import './App.css';
import {UserProvider} from './context/userContext'

const App: React.FC = () => {
  return (
    <>
    <UserProvider>
      <Router/>
    </UserProvider>
    </>
  );
}

export default App;
