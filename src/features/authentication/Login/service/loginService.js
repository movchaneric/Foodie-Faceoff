import toast from "react-hot-toast";
import axios from "../../../../axios";

export const postLoginUser = async ({ username, password, config }) => {
  try {
    const res = await axios.post(
      "/login",
      {
        username,
        password,
      },
      { withCredentials: true }
    );

    console.log("Response in postLogin: ", res);

    if (res.status === 200 && res.data.status === "success") {
      toast.success("Redirecting...");
    }
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
