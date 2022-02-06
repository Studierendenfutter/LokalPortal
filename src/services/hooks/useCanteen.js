import { useEffect, useState } from "react";
import fetchCanteen from "../backend/fetchCanteen";
import putCanteen from "../backend/putCanteen";

export default function useCanteen() {
  const [canteen, setCanteen] = useState();

  async function fetchData() {
    const _canteen = await fetchCanteen();
    setCanteen(_canteen.canteen);
  }

  async function updateCanteen(data) {
    await putCanteen(data);
    await fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [canteen, updateCanteen];
}
