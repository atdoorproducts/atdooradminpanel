import axios from "../../Helpers/axios";

export const update_category_action = (name, description) => {
  return async (dispath) => {
    // Connecting to backend using axios.
    await axios
      .post("/admin/category/update", {
        name,
        description,
      })
      .then((res) => {
        alert("Updated Successfully..");
      })
      .catch((err) => {
        alert(err.request);
      });
  };
};
