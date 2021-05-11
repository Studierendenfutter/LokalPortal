import React, { useState } from "react";
import Login from "../Login";
import CanteenOverview from "../CanteenOverview";
import useAuthToken from "../../services/hooks/useAuthToken";

import "./Meals.css";
import getDateString from "../../services/utils/getDateString";

export default function Meals() {
  const [authToken] = useAuthToken();
  const [tab, setTab] = useState("today");
  if (!authToken) {
    return <Login />;
  }

  return (
    <div className="sf-canteen-user-page">
      <h1>Alle Gerichte</h1>
      <p>
        {new Date().toLocaleDateString("de-DE", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div class="sf-canteen-user-tabs">
        <button
          className={tab === "today" ? "sf-canteen-user-tab-active" : ""}
          onClick={() => setTab("today")}
        >
          Heutige Gerichte
        </button>
        <button
          className={tab === "planned" ? "sf-canteen-user-tab-active" : ""}
          onClick={() => setTab("planned")}
        >
          Geplante Gerichte
        </button>
        <button
          className={tab === "past" ? "sf-canteen-user-tab-active" : ""}
          onClick={() => setTab("past")}
        >
          Vergangene Gerichte
        </button>
      </div>
      {tab === "today" && (
        <CanteenOverview
          filter={(meal) => meal.date === getDateString(new Date())}
        />
      )}
      {tab === "planned" && (
        <CanteenOverview filter={(meal) => new Date(meal.date) > new Date()} />
      )}
      {tab === "past" && (
        <CanteenOverview filter={(meal) => new Date(meal.date) < new Date()} />
      )}
    </div>
  );
}
