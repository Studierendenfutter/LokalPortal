import config from "../../config";
import putData from "./putData";

export default async function putCanteenUser(data) {
  const url = config.BACKEND_URL + "/canteenUsers";
  const response = await putData(url, data);
  return response.data.token;
}
