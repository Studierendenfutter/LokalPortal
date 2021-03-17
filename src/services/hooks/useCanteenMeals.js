import { useEffect, useState } from "react";
import getMeals from "../backend/getMeals";

export default function useCanteenMeals(filter = {}) {
  const [canteenMeals, setCanteenMeals] = useState();

  useEffect(() => {
    async function fetch() {
      const canteenMeals = await getMeals(filter);
      console.log(canteenMeals);
      setCanteenMeals(canteenMeals[0].meals);
    }
    fetch();
    /* eslint-disable */
  }, []);

  return [canteenMeals];
}
