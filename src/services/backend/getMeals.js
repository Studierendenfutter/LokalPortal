import config from "../../config";
import getData from "./getData";

export default function getMeals() {
  const url = config.BACKEND_URL + "/canteenUsers/meals";

  return getData(url);
}
