import { useEffect, useState } from "react";
import getMeals from "../backend/getMeals";

export default function useCanteenMeals(filter = {}) {
  const [canteenMeals, setCanteenMeals] = useState();

  useEffect(() => {
    async function fetch() {
      const canteens = await getMeals(filter);
      setCanteenMeals(canteens);
    }
    fetch();
    /* eslint-disable */
  }, []);

  return [canteenMeals];
}
