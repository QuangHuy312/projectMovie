import { userService } from "../../service/UserManagerService";
import { TOKEN } from "../../util/setting/config";
import { SET_USER_LOGIN } from "../types/UserManagerType";
import { createAction } from "./createAction/createAction";

export const SetUserSignUp = (info, callback, callback2, callback3) => {
  return async (dispatch) => {
    try {
      await userService.setUserSignUp(info);
      callback();
      callback3();
    } catch (error) {
      callback2();
      console.log(error);
    }
  };
};

export const SetUserLogin = (user, callback, callback2, callback3) => {
  return async (dispatch) => {
    try {
      const { data } = await userService.setUserLogin(user);
      dispatch(createAction(SET_USER_LOGIN, data.content));
      localStorage.setItem(TOKEN, data.content.accessToken);
      callback();
      callback3();
    } catch (error) {
      callback2();
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
