import axios from "../../../axios";

export async function getAllRestuarants() {
  try {
    const res = await axios.get("/restaurants", { withCredentials: true });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
