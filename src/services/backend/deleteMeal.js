import config from "../../config";
import deleteData from "./deleteData";

export default function deleteMeal(mealId) {
  const url = config.BACKEND_URL + "/canteenUsers/meals/" + mealId;
  return deleteData(url);
}
