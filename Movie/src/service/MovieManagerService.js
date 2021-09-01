import { GROUPID } from "../util/setting/config";
import { baseService } from "./baseService";

export class MovieManagerService extends baseService {
  getBannerFilm = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
  };

  getFilmList = (page) => {
    return this.get(
      `api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUPID}&soTrang=${page}&soPhanTuTrenTrang=15`
    );
  };

  getInfoFilm = (id) => {
    return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  };
}

export const movieService = new MovieManagerService();
