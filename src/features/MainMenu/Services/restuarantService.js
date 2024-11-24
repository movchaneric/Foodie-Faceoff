import axios from "../../../axios";

export async function getAllRestuarants() {
  try {
    const res = await axios.get("/restaurants", { withCredentials: true });

    return res.data.restaurants;
  } catch (err) {
    console.log(err);
  }
}
