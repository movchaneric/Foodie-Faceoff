import toast from "react-hot-toast";
import axios from "../../../../axios";

export const postRegisterUser = async (data, onSuccess) => {
  console.log("postRegisterUser: ", data);
  try {
    const response = await axios.post("/register-user", data);
    console.log(response);
    if (
      response.status === 200 &&
      response.data.message === "user-registered"
    ) {
      toast.success("User registered successfully");

      if (onSuccess) onSuccess();
    } else if (response.data.message === "user-exists") {
      toast.error("User already exists with this email.");
    } else {
      toast.error("Unexpected response from the server.");
    }
  } catch (error) {
    // Check if there is a response from the server
    if (error.response) {
      // The request was made, but the server responded with a status code outside the 2xx range
      console.error("Error Response:", error.response.data);
      toast.error(
        `Error: ${error.response.data.message || "Failed to register user"}`
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No Response:", error.request);
      toast.error("No response from the server. Please try again later.");
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error Message:", error.message);
      toast.error("An error occurred. Please try again.");
    }
  }
};
