import config from "../../config";
import getData from "./getData";

export default function fetchCanteenUser() {
  const url = config.BACKEND_URL + "/canteenUsers";

  return getData(url);
}
