import { loginService } from "../../services/LoginManagerService";
import { TOKEN } from "../../util/settings/config";
import { createAction } from "../actions/createAction/createAction";
import { SET_LOGIN } from "../types/LoginType";

export const LoginAction = (info, callback, callback2, callback3) => {
  return async (dispatch) => {
    try {
      const { data } = await loginService.adminLogin(info);
      if (data.content.maLoaiNguoiDung === "QuanTri") {
        // alert("Đăng nhập thành công");
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem("login", JSON.stringify(data.content));
        callback3();
        callback();
        dispatch(createAction(SET_LOGIN, data.content));
      } else {
        alert("Bạn không có quyền truy cập");
      }
    } catch (error) {
      // alert("Tài khoản hoặc mật khẩu không đúng");
      callback2();
      console.log(error);
    }
  };
};
