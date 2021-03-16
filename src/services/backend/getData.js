import Axios from "axios";
import getHeaders from "../utils/getHeaders";

export default async function getData(url) {
  try {
    const headers = getHeaders();
    const response = await Axios.get(url, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
