import { authConstants } from "../Constants";
import axios from "../../Helpers/axios";

export const Login_Action = (credentials) => {
  return async (dispatch) => {
    // console.log(user)
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });

    // contact to backend
    // We pass the user information like email and password in user by spreading it.
    await axios
      .post("/admin/login", {
        ...credentials,
      })
      .then((res) => {
        // console.log(res.data);
        const { token, admin } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("admin", JSON.stringify(admin));

        // dispatch success
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            admin,
          },
        });
      })
      .catch((err) => {
        // const errors = JSON.parse(err.request.response)
        console.log(err);

        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            err,
          },
        });

        // console.log(errors)
      });
  };
};
