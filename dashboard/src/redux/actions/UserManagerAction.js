import { userManager } from "../../services/UserManagerService";
import { GET_LIST_USER, SEARCH_USER } from "../types/UserManagerType";
import { createAction } from "./createAction/createAction";

export const getUserListAction = (username = "") => {
  return async (dispatch) => {
    try {
      const { data } = await userManager.getUserList(username);
      dispatch(createAction(GET_LIST_USER, data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUserAction = (info, callback1, callback2) => {
  return async () => {
    try {
      await userManager.addUser(info);
      callback1();
      callback2();
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchUserAction = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await userManager.searchUser(name);
      dispatch(createAction(SEARCH_USER, data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserAction = (username, callback) => {
  return async (dispatch) => {
    try {
      await userManager.deleteUser(username);
      dispatch(getUserListAction);
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUserActioon = (username, callback, callback2) => {
  return async () => {
    try {
      await userManager.updateUser(username);
      callback();
      callback2();
    } catch (error) {
      alert("cập nhật thất bại");
      console.log(error);
    }
  };
};
