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

export const addUserAction = (info, addSuccess, addError, nextPage) => {
  return async () => {
    try {
      await userManager.addUser(info);
      addSuccess();
      nextPage();
    } catch (error) {
      addError();
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

export const deleteUserAction = (username, deleteSuccess, deleteError) => {
  return async (dispatch) => {
    try {
      await userManager.deleteUser(username);
      dispatch(getUserListAction());
      deleteSuccess();
    } catch (error) {
      deleteError();
      console.log(error);
    }
  };
};

export const updateUserActioon = (
  username,
  updateSuccess,
  updateError,
  nextPage
) => {
  return async () => {
    try {
      await userManager.updateUser(username);
      updateSuccess();
      nextPage();
    } catch (error) {
      updateError();
      console.log(error);
    }
  };
};
