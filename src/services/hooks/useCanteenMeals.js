import { useEffect, useState } from "react";
import getMeals from "../backend/getMeals";

export default function useCanteenMeals(filter = {}) {
  const [canteenMeals, setCanteenMeals] = useState([]);

  useEffect(() => {
    async function fetch() {
      const canteenMeals = await getMeals(filter);
      if (!canteenMeals || !canteenMeals[0]) {
        setCanteenMeals([]);
        return;
      }
      setCanteenMeals(canteenMeals[0].meals);
    }
    fetch();
    /* eslint-disable */
  }, []);

  return [canteenMeals];
}
