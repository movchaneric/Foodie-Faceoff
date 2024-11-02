import toast from "react-hot-toast";
import axios from "../../../../axios";

export const postLoginUser = async ({ username, password }) => {
  try {
    const response = await axios.post(
      "/login",
      {
        username,
        password,
      },
      { withCredentials: true }
    );

    return response.data;
  } catch (err) {
    console.log(err.response.data);
    toast.error(err.response.data.message);
  }
};
