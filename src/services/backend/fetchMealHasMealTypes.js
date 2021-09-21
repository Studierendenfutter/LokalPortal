import getData from "./getData";
import config from "../../config";

export default async function fetchMealHasMealTypes(id) {
  const url = config.BACKEND_URL + "/canteenUsers/meals/" + id + "/types";
  try {
    const response = await getData(url);
    return response.mealHasMealTypes;
  } catch (e) {
    return null;
  }
}
