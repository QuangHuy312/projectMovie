import axios from "axios";
import { DOMAIN, TOKEN } from "../util/settings/config";

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

  put = (url, data) => {
    return axios({
      method: "PUT",
      url: `${DOMAIN}/${url}`,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  delete = (url, data) => {
    return axios({
      method: "DELETE",
      url: `${DOMAIN}/${url}`,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
}
