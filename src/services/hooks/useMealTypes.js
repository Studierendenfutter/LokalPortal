import { useEffect, useState } from "react";
import getMealTypes from "../backend/getMealTypes";

export default function useMealTypes() {
  const [mealTypes, setMealTypes] = useState([]);

  useEffect(() => {
    async function fetch() {
      const mealTypes = await getMealTypes();
      setMealTypes(mealTypes);
    }
    fetch();
  }, []);

  return mealTypes;
}
