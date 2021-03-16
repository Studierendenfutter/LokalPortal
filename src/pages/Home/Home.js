import React from "react";
import Login from "../Login";
import CanteenOverview from "../CanteenOverview";
import useAuthToken from "../../services/hooks/useAuthToken";

export default function Home() {
  const [authToken] = useAuthToken();

  if (!authToken) {
    return <Login />;
  }

  return <CanteenOverview />;
}
