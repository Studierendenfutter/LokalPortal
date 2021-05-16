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

  async function createMealHasMealType(typeId) {
    console.log(typeId);
    await postMealHasMealType(id, { meal_type_id: typeId });
    await fetchData();
  }

  async function removeMealHasMealType(typeId) {
    await deleteMealHasMealType(id, typeId);
    await fetchData();
  }

  return [mealHasMealTypes, createMealHasMealType, removeMealHasMealType];
}
