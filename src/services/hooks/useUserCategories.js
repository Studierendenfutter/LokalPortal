import { useEffect, useState } from "react";
import getUserCategories from "../backend/getUserCategories";

export default function useUserCategories() {
  const [userCategories, setUserCategories] = useState([]);

  useEffect(() => {
    async function fetch() {
      const userCategories = await getUserCategories();
      setUserCategories(userCategories);
    }
    fetch();
  }, []);

  return userCategories;
}
