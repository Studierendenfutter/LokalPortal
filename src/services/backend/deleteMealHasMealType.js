import config from "../../config";
import deleteData from "./deleteData";

export default function deleteMealHasMealType(mealId, mealHasMealTypeId, code) {
  const url =
    config.BACKEND_URL +
    "/canteenUsers/meals/" +
    mealId +
    "/types/" +
    mealHasMealTypeId;
  return deleteData(url, { code });
}
