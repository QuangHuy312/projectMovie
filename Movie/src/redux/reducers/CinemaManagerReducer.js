import { GET_INFO_CINEMA } from "../types/CinemaManagerType";

const initialState = {
  arrCinema: [],
};

export const CinemaManagerReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_INFO_CINEMA: {
      state.arrCinema = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
