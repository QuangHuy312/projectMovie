import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemPlate from "./template/HomeTemplate/HomeTemPlate";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import { GlobalStyle } from "./GlobalStyle";
import { TOKEN } from "./util/setting/config";
import { useDispatch } from "react-redux";
import { GetInfoUser } from "./redux/actions/UserManagerAction";
import { SignIn } from "./views/SignIn/SignIn";
import { SignUp } from "./views/SignUp/SignUp";
import Profile from "./views/Profile/Profile";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      dispatch(GetInfoUser(token));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemPlate path="/page/:number" Component={Home} exact />
        <HomeTemPlate path="/detail/:id" Component={Detail} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
        <HomeTemPlate path="/" Component={Home} exact />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
