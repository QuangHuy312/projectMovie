import axios from "axios";
import { DOMAIN, TOKEN } from "../util/setting/config";
export class baseService {
  get = (url) => {
    return axios({
      method: "GET",
      url: `${DOMAIN}/${url}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  post = (url, data) => {
    return axios({
      method: "POST",
      url: `${DOMAIN}/${url}`,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
}
