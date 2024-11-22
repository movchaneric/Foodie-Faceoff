import axios from "../../../../axios";

export const fetchUser = async () => {
  try {
    const response = await axios.get("/me", {
      withCredentials: true,
    });
    console.log(response);
    return response.data.user;
  } catch (error) {
    if (error.response) {
      // Handle HTTP error response (e.g., 401, 404)
      throw new Error(error.response.data.error || "Failed to fetch user data");
    } else {
      // Handle other errors (e.g., network errors)
      throw new Error("An error occurred while fetching user data");
    }
  }
};
