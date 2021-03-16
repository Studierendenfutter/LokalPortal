import Axios from "axios";
import getHeaders from "../utils/getHeaders";

export default function deleteData(url, data) {
  const headers = getHeaders();
  return Axios.delete(url, { data, headers });
}
