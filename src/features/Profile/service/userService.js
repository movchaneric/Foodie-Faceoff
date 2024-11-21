import axios from "../../../axios";

export async function getCurrentUser() {
  try {
    const res = await axios.get("/me", { withCredentials: true });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
