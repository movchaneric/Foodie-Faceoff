import toast from "react-hot-toast";
import axios from "../../../../axios";

export const postLoginUser = async ({ username, password, config }) => {
  try {
    await axios.post(
      "/login",
      {
        username,
        password,
      },
      { withCredentials: true }
    );
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
