import { useEffect, useState } from "react";
import fetchMealPrices from "../backend/fetchMealPrices";
import postPrice from "../backend/postPrice";
import deletePrice from "../backend/deletePrice";

export default function useMealPrices(id) {
  const [mealPrices, setMealPrices] = useState([]);

  async function fetchData() {
    const _mealPrices = await fetchMealPrices(id);
    setMealPrices(_mealPrices);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function createPrice(price) {
    await postPrice(id, price);
  }

  async function removePrice(priceId) {
    await deletePrice(id, priceId);
  }

  return [mealPrices, createPrice, removePrice, fetchData];
}
