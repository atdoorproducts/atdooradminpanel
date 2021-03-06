import axios from "../../Helpers/axios";
import { categoryConstants } from "../Constants";

export const delete_category_action = (name) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.DELETE_CATEGORY_REQUEST,
    });
    await axios
      .post("/admin/category/delete", {
        name,
      })
      .then((res) => {
        dispatch({
          type: categoryConstants.DELETE_CATEGORY_SUCCESS,
        });
        alert("Deleted Successfully");
      })
      .catch((err) => {
        dispatch({
          type: categoryConstants.DELETE_CATEGORY_FAILURE,
        });
        alert(err.request);
      });
  };
};
