import getData from "./getData";
import config from "../../config";

export default function getCanteens() {
  const url = config.BACKEND_URL + "/mealTypes";
  return getData(url);
}
