import { useEffect, useState } from "react";
import fetchMealHasMealTypes from "../backend/fetchMealHasMealTypes";
import postMealHasMealType from "../backend/postMealHasMealType";
import deleteMealHasMealType from "../backend/deleteMealHasMealType";

export default function useMealHasMealTypes(id) {
  const [mealHasMealTypes, setMealHasMealTypes] = useState([]);

  async function fetchData() {
    const _mealHasMealTypes = await fetchMealHasMealTypes(id);
    setMealHasMealTypes(_mealHasMealTypes);
  }

  useEffect(() => {
    fetchData();
    /* eslint-disable */
  }, []);

  async function createPrice(price) {
    await postMealHasMealType(id, price);
    await fetchData();
  }

  async function removePrice(priceId) {
    await deleteMealHasMealType(id, priceId);
    await fetchData();
  }

  return [mealHasMealTypes, createPrice, removePrice];
}
