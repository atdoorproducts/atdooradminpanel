import axios from "../../Helpers/axios";

export const delete_product_action = (productName) => {
  return async (dispatch) => {
    await axios
      .post("/admin/product/delete", {
        productName,
      })
      .then((res) => {
        alert("Product Deleted Successfully..");
      })
      .catch((err) => {
        alert(err.request);
      });
  };
};
