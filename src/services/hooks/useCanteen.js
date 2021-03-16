import { useEffect, useState } from "react";
import fetchCanteen from "../backend/fetchCanteen";

export default function useCanteen() {
  const [canteen, setCanteen] = useState();

  async function fetchData() {
    const _meal = await fetchCanteen();
    setCanteen(_meal);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [canteen];
}
