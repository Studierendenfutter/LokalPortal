import config from "../../config";
import putData from "./putData";

export default function putMeal(meal) {
  const url = config.BACKEND_URL + "/canteenUsers/meals/" + meal.id;
  return putData(url, meal);
}
