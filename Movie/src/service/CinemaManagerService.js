import { baseService } from "./baseService";

export class CinemaManagerService extends baseService {
  getInfoCinema = () => {
    return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
  };
}

export const cinemaService = new CinemaManagerService();
