import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "../src/pages/Login/Login";
import "./index.css";
import TemplateAdmin from "./template/TemplateAdmin/TemplateAdmin";
import DashBoard from "../src/pages/DashBoard/DashBoard";
import UserManager from "./pages/DashBoard/UserManager/UserManager";
import AddNewUser from "./pages/DashBoard/AddNewUser/AddNewUser";
import EditUser from "./pages/DashBoard/EditUser/EditUser";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <TemplateAdmin
          path="/admin"
          exact
          component={DashBoard}
          redirectPath="/"
        />

        <TemplateAdmin
          path="/admin/manager"
          exact
          component={UserManager}
          redirectPath="/"
        />

        <TemplateAdmin
          path="/admin/manager/addnew"
          exact
          component={AddNewUser}
          redirectPath="/"
        />

        <TemplateAdmin
          path="/admin/manager/edit/:name"
          exact
          component={EditUser}
          redirectPath="/"
        />
        <Route path="/" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
