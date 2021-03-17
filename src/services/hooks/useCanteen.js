import { useEffect, useState } from "react";
import fetchCanteen from "../backend/fetchCanteen";

export default function useCanteen() {
  const [canteen, setCanteen] = useState();

  async function fetchData() {
    const _canteen = await fetchCanteen();
    console.log(_canteen.canteen);
    setCanteen(_canteen.canteen);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [canteen];
}
