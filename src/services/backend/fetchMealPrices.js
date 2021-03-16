import getData from "./getData";
import config from "../../config";

export default async function fetchMealPrices(id) {
  const url = config.BACKEND_URL + "/canteenUsers/meals/" + id + "/prices";
  try {
    const response = await getData(url);
    return response.mealPrices;
  } catch (e) {
    return null;
  }
}
