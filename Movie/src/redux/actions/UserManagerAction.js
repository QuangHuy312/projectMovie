import { userService } from "../../service/UserManagerService";
import { TOKEN } from "../../util/setting/config";
import { SET_USER_LOGIN } from "../types/UserManagerType";
import { createAction } from "./createAction/createAction";

export const SetUserSignUp = (info, signUpSuccess, signUpError, nextPage) => {
  return async () => {
    try {
      await userService.setUserSignUp(info);
      signUpSuccess();
      nextPage();
    } catch (error) {
      signUpError();
      console.log(error);
    }
  };
};

export const SetUserLogin = (user, loginSuccess, loginError, nextPage) => {
  return async (dispatch) => {
    try {
      const { data } = await userService.setUserLogin(user);
      dispatch(createAction(SET_USER_LOGIN, data.content));
      localStorage.setItem(TOKEN, data.content.accessToken);
      loginSuccess();
      nextPage();
    } catch (error) {
      loginError();
      console.log(error);
    }
  };
};

export const GetInfoUser = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await userService.getInfoUser(token);
      dispatch(createAction(SET_USER_LOGIN, data.content));
    } catch (error) {
      console.log(error);
    }
  };
};
