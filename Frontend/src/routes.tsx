import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

import history from './history';
import userContext from './context/userContext';

//Pages
import RegisterStudent from "./pages/RegisterStudent/index";
import ListStudents from './pages/ListStudents/index';

const Routes: React.FC = () => {
  const {firstUse} = useContext(userContext);

  return (
    <BrowserRouter>
      <Switch>
        <Router history={history}>
            <Route component={RegisterStudent} path="/" exact />
            <Route component={ListStudents} path="/list" exact />
        </Router>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
