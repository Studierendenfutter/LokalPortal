import Axios from "axios";
import getHeaders from "../utils/getHeaders";

export default function putData(url, data) {
  const headers = getHeaders();
  return Axios.put(url, data, { headers });
}
