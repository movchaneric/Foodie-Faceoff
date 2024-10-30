import toast from "react-hot-toast";
import axios from "../../../../axios";

export const postRegisterUser = async ({ type, username, email, password }) => {
  const userData = { type, username, email, password };
  console.log("postRegisterUser: ", userData);
  try {
    const res = await axios.post("/registerUser", {
      type,
      username,
      email,
      password,
    });

    console.log(res);
    if (res.status === 200 && res.data.status === "success") {
      toast.success("User has been created");
    }
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
