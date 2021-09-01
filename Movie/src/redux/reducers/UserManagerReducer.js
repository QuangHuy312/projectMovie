import { SET_USER_LOGIN } from "../types/UserManagerType";

const initialState = {
  userLogin: null,
};

export const UserManagerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN: {
      state.userLogin = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
