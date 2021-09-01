import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class UserManagerService extends baseService {
  getUserList = (username = "") => {
    if (username != "") {
      return this.get(
        `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${username}`
      );
    }
    return this.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
  };

  addUser = (info) => {
    return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`, info);
  };

  searchUser = (name) => {
    return this.get(
      `api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${name}`
    );
  };

  deleteUser = (username) => {
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${username}`);
  };

  updateUser = (info) => {
    return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, info);
  };
}

export const userManager = new UserManagerService();
