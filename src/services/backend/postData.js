import Axios from "axios";
import getHeaders from "../utils/getHeaders";

export default function postData(url, data) {
  const headers = getHeaders();
  return Axios.post(url, data, {headers});
}
