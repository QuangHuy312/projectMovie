import { cinemaService } from "../../service/CinemaManagerService";
import { GET_INFO_CINEMA } from "../types/CinemaManagerType";
import { createAction } from "./createAction/createAction";
export const GetCinemaAction = async (dispatch) => {
  try {
    const { data } = await cinemaService.getInfoCinema();
    dispatch(createAction(GET_INFO_CINEMA, data.content));
  } catch (error) {
    console.log(error);
  }
};
