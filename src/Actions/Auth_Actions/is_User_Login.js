import { authConstants } from "../Constants";

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    // Getting the token from local storage.
    const token = localStorage.getItem("token");

    if (token) {
      // if we get the token

      // We parse the user in js object with the help of parse function.
      const admin = JSON.parse(localStorage.getItem("admin"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          admin,
        },
      });
    }
  };
};
