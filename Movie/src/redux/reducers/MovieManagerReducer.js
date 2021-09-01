import { FilmInfo } from "../../core/models/FilmInfo";
import { GET_DETAIL, GET_CAROUSEL, GET_FILM } from "../types/MovieManagerType";

const initialState = {
  arrFilm: new FilmInfo(),
  filmDetail: {},
  arrBanner: [],
};
export const MovieManagerReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_CAROUSEL: {
      state.arrBanner = payload;
      return { ...state };
    }
    case GET_FILM: {
      state.arrFilm = payload;
      return { ...state };
    }
    case GET_DETAIL: {
      state.filmDetail = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
