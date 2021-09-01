import { movieService } from "../../service/MovieManagerService";
import { createAction } from "./createAction/createAction";
import { GET_DETAIL, GET_FILM, GET_CAROUSEL } from "../types/MovieManagerType";

export const GetBannerFilmAction = async (dispatch) => {
  try {
    const { data } = await movieService.getBannerFilm();
    dispatch(createAction(GET_CAROUSEL, data.content));
  } catch (error) {
    console.log(error);
  }
};

export const GetMovieFilmAction = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await movieService.getFilmList(page);
      dispatch(createAction(GET_FILM, data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetInfoFIlmAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await movieService.getInfoFilm(id);
      dispatch(createAction(GET_DETAIL, data.content));
    } catch (error) {
      console.log(error);
    }
  };
};
