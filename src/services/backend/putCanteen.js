import config from "../../config";
import putData from "./putData";

export default async function putCanteen(data) {
  const url = config.BACKEND_URL + "/canteenUsers/canteen";
  const response = await putData(url, data);
  return response.data.token;
}
