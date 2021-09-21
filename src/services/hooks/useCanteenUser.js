import { useEffect, useState } from "react";
import fetchCanteenUser from "../backend/fetchCanteenUser";
import putCanteenUser from "../backend/putCanteenUser";
import useAuthToken from "./useAuthToken";

export default function useCanteenUser() {
  const [canteenUser, setCanteenUser] = useState({});
  const [, setAuthToken] = useAuthToken();

  async function fetchData() {
    const _canteenUser = await fetchCanteenUser();
    setCanteenUser(_canteenUser.canteenUser);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function updateCanteenUser(data) {
    const token = await putCanteenUser(data);
    await setAuthToken({ token });
    window.location.reload();
  }

  return [canteenUser, updateCanteenUser];
}
