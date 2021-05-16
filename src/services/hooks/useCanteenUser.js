import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import fetchCanteenUser from "../backend/fetchCanteenUser";
import putCanteenUser from "../backend/putCanteenUser";
import useAuthToken from "./useAuthToken";

export default function useCanteenUser() {
  const [canteenUser, setCanteenUser] = useState({});
  const [, setAuthToken] = useAuthToken();

  const history = useHistory();

  async function fetchData() {
    const _canteenUser = await fetchCanteenUser();
    setCanteenUser(_canteenUser.canteenUser);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function updateCanteenUser(data) {
    const token = await putCanteenUser(data);
    console.log(data, token);
    await setAuthToken({ token });
    window.location.reload();
  }

  return [canteenUser, updateCanteenUser];
}
