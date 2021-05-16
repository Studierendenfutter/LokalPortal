import React from "react";
import Login from "../Login";
import CanteenOverview from "../CanteenOverview";
import useAuthToken from "../../services/hooks/useAuthToken";

import "./Home.css";
import getDateString from "../../services/utils/getDateString";

export default function Home() {
  const [authToken] = useAuthToken();

  if (!authToken) {
    return <Login />;
  }

  return (
    <div className="sf-canteen-user-page">
      <h1>Meine Gerichte heute im Lunchletter</h1>
      <p className="sf-canteen-user-page-date">
        {new Date().toLocaleDateString("de-DE", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <CanteenOverview
        filter={(meal) => meal.date === getDateString(new Date())}
      />
    </div>
  );
}
