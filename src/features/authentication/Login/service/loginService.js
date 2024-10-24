import toast from "react-hot-toast";
import axios from "../../../../axios";

export const postLogin = async (loginData, onLoginSuccess) => {
  try {
    const response = await axios.post("/login", loginData);

    if (response.status === 200 && response.data.message === "login-success") {
      toast.success("Login successful!");

      // Login success than redirect the main page
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } else if (response.data.message === "user-not-found") {
      toast.error("Incorrect password. Please try again.");
    } else {
      toast.error("Unexpected error. Please try again.");
    }
  } catch (error) {
    // If there's a response from the server (like 404 or 401)
    if (error.response) {
      console.error("Error Response:", error.response.data);

      // Handle different status codes
      if (error.response.status === 404) {
        toast.error("User not found.");
      } else if (error.response.status === 401) {
        toast.error("Incorrect password.");
      } else {
        toast.error(`Error: ${error.response.data.message || "Login failed"}`);
      }
    } else if (error.request) {
      // No response received from the server
      console.error("No Response:", error.request);
      toast.error("No response from the server. Please try again later.");
    } else {
      // Other errors during request setup
      console.error("Error Message:", error.message);
      toast.error("An error occurred. Please try again.");
    }
  }
};
