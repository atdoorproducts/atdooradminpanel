import axios from "../../Helpers/axios";
import { productConstants } from "../Constants";

export const create_product_action = (newProduct) => {
  for (var key of newProduct.entries()) {
    console.log(key[0] + ", " + key[1]);
  }

  return async (dispatch) => {
    dispatch({
      type: productConstants.CREATE_PRODUCT_REQUEST,
    });

    await axios
      .post("/admin/product/create", newProduct)
      .then((res) => {
        alert("Product Created Successfully.");
        dispatch({
          type: productConstants.CREATE_PRODUCT_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("There Might be Some Problem In Backend.");
        dispatch({
          type: productConstants.CREATE_PRODUCT_FAILURE,
        });
      });
  };
};
