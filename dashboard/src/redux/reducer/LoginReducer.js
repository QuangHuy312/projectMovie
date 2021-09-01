import { SET_LOGIN } from "../types/LoginType";
let admin = {};
const logged = localStorage.getItem("login");
if (logged) {
  admin = JSON.parse(logged);
}

const initialState = {
  adminLogin: admin,
};

export const LoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN: {
      state.adminLogin = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
