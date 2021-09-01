import { baseService } from "./baseService";

export class LoginManagerService extends baseService {
  adminLogin = (info) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, info);
  };
}

export const loginService = new LoginManagerService();
