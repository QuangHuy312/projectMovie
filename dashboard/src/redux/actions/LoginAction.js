import { loginService } from "../../services/LoginManagerService";
import { TOKEN } from "../../util/settings/config";
import { createAction } from "../actions/createAction/createAction";
import { SET_LOGIN } from "../types/LoginType";

export const LoginAction = (
  info,
  loginSuccess,
  loginError,
  impossibleLogin,
  nextPage
) => {
  return async (dispatch) => {
    try {
      const { data } = await loginService.adminLogin(info);
      if (data.content.maLoaiNguoiDung === "QuanTri") {
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem("login", JSON.stringify(data.content));
        nextPage();
        loginSuccess();
        dispatch(createAction(SET_LOGIN, data.content));
      } else {
        impossibleLogin();
      }
    } catch (error) {
      loginError();
      console.log(error);
    }
  };
};
