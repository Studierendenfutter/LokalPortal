import { useEffect, useState } from "react";
import fetchMeal from "../backend/fetchMeal";
import putMeal from "../backend/putMeal";

export default function useMeal(id) {
  const [meal, setMeal] = useState();

  async function fetchData() {
    const _meal = await fetchMeal(id);
    setMeal(_meal);
  }

  useEffect(() => {
    fetchData();
    /* eslint-disable */
  }, []);

  async function updateMeal(meal) {
    await putMeal(meal);
    await fetchData();
  }

  return [meal, updateMeal];
}
