import postData from "./postData";
import config from "../../config";

export default async function postPrice(mealId, data) {
  const url = config.BACKEND_URL + "/canteenUsers/meals/" + mealId + "/prices";
  try {
    const response = await postData(url, data);
    const { userCategoryMealPrice } = response.data;
    return userCategoryMealPrice;
  } catch (e) {
    return null;
  }
}
