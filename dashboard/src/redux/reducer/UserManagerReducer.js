import { GET_LIST_USER, SEARCH_USER } from "../types/UserManagerType";

const initialState = {
  userList: [],
};
export const UserManagerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_USER: {
      state.userList = payload;
      return { ...state };
    }
    case SEARCH_USER: {
      if (payload) {
        state.userList = payload;
      }
      return { ...state };
    }
    default:
      return state;
  }
};
