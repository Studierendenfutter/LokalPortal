import postData from "./postData";
import config from "../../config";


export default async function postMealHasMealType(mealId, data) {
  const url = config.BACKEND_URL + "/canteenUsers/meals/"+mealId+"/types";
  try {
    console.log(data);
    const response = await postData(url, data);
    const { mealMealHasMealType } = response.data;
    return mealMealHasMealType;
  } catch (e) {
    return null;
  }
}
