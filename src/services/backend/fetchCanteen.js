import config from "../../config";
import getData from "./getData";

export default function fetchCanteen(filter) {
  const url = config.BACKEND_URL + "/canteenUsers/canteen";

  return getData(url);
}
