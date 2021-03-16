import getData from "./getData";
import config from "../../config";

export default async function fetchMeal(id) {
  const url = config.BACKEND_URL + "/canteenUsers/meals/" + id;
  try {
    const response = await getData(url);
    return response.meal;
  } catch (e) {
    return null;
  }
}
