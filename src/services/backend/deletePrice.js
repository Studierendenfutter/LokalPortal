import config from "../../config";
import deleteData from "./deleteData";

export default function deletePrice(mealId, priceId) {
  const url =
    config.BACKEND_URL + "/canteenUsers/meals/" + mealId + "/prices/" + priceId;
  return deleteData(url);
}
