import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button } from "semantic-ui-react";
import useAuthToken from "../../services/hooks/useAuthToken";

import "./Navbar.css";

/*

<Link to="/" color="white">
          <div className="sf-canteen-user-topbar-left">
            <img
              src="https://studierendenfutter.de/wp-content/uploads/2021/02/Header-Desktop-s.png"
              alt="Kochmütze über gekreuzten Messer und Gabel"
              className="sf-canteen-user-topbar-img"
            />
          </div>
        </Link>
        */

export default function Navbar({ children }) {
  const history = useHistory();
  const [authToken] = useAuthToken();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <div className="sf-canteen-user-topbar">
        <div>
          <Button
            circular
            size="big"
            icon="home"
            color="white"
            onClick={() => history.push("/")}
            className={
              location.pathname === "/"
                ? "sf-canteen-user-topbar-button-active"
                : "sf-canteen-user-topbar-button"
            }
          ></Button>
          <Button
            circular
            size="big"
            icon="list"
            color="white"
            onClick={() => history.push("/meals")}
            className={
              location.pathname === "/meals"
                ? "sf-canteen-user-topbar-button-active"
                : "sf-canteen-user-topbar-button"
            }
          ></Button>
          <Button
            circular
            size="big"
            icon="plus"
            color="white"
            onClick={() => history.push("/meals/create")}
            className={
              location.pathname === "/meals/create"
                ? "sf-canteen-user-topbar-button-active"
                : "sf-canteen-user-topbar-button"
            }
          ></Button>
          <Button
            circular
            size="big"
            icon="setting"
            color="white"
            onClick={() => history.push("/settings")}
            className={
              location.pathname === "/settings"
                ? "sf-canteen-user-topbar-button-active"
                : "sf-canteen-user-topbar-button"
            }
          ></Button>
        </div>
      </div>
      <div className="sf-canteen-user-content">
        <div className="sf-canteen-user-top-area">
          <div>
            <img
              src="https://studierendenfutter.de/wp-content/uploads/2021/05/Logo-mein-Studierendenfutter-DUNKEL-transparent-Small.png"
              height="70"
              alt="Mein Studierendenfutter"
            />
          </div>
          {authToken ? (
            <div>
              <Button inverted color="white" onClick={() => history.push("/")}>
                Übersicht
              </Button>
              <Button
                inverted
                color="red"
                onClick={() => {
                  window.localStorage.removeItem("authToken");
                  history.push("/");
                  window.location.reload();
                }}
              >
                Ausloggen
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
