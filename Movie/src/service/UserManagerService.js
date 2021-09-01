import { baseService } from "./baseService";

export class UserManagerService extends baseService {
  setUserSignUp = (info) => {
    return this.post(`api/QuanLyNguoiDung/DangKy`, info);
  };

  setUserLogin = (user) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, user);
  };

  getInfoUser = (token) => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`, token);
  };
}
export const userService = new UserManagerService();
