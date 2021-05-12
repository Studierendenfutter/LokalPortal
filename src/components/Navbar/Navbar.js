import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Popup } from "semantic-ui-react";
import useAuthToken from "../../services/hooks/useAuthToken";

import "./Navbar.css";

export default function Navbar({ children }) {
  const history = useHistory();
  const [authToken] = useAuthToken();
  const location = useLocation();

  return (
    <div
      className={`${
        authToken
          ? "sf-canteen-user-topbar-logged-in"
          : "sf-canteen-user-topbar-logged-out"
      }`}
    >
      <div className="sf-canteen-user-topbar">
        <div className="sf-canteen-user-tobar-buttons">
          <Popup
            content="Start"
            inverted
            basic
            position="right center"
            trigger={
              <Button
                circular
                size="big"
                icon="home"
                onClick={() => history.push("/")}
                className={
                  location.pathname === "/"
                    ? "sf-canteen-user-topbar-button-active"
                    : "sf-canteen-user-topbar-button"
                }
              />
            }
          />
          <Popup
            content="Gerichte"
            inverted
            basic
            position="right center"
            trigger={
              <Button
                circular
                size="big"
                icon="list"
                onClick={() => history.push("/meals")}
                className={
                  location.pathname === "/meals"
                    ? "sf-canteen-user-topbar-button-active"
                    : "sf-canteen-user-topbar-button"
                }
              ></Button>
            }
          />
          <Popup
            content="Gericht anlegen"
            inverted
            basic
            position="right center"
            trigger={
              <Button
                circular
                size="big"
                icon="plus"
                onClick={() => history.push("/meals/create")}
                className={
                  location.pathname === "/meals/create"
                    ? "sf-canteen-user-topbar-button-active"
                    : "sf-canteen-user-topbar-button"
                }
              ></Button>
            }
          />
          <Popup
            content="Einstellungen"
            inverted
            basic
            position="right center"
            trigger={
              <Button
                circular
                size="big"
                icon="setting"
                onClick={() => history.push("/settings")}
                className={
                  location.pathname === "/settings"
                    ? "sf-canteen-user-topbar-button-active"
                    : "sf-canteen-user-topbar-button"
                }
              ></Button>
            }
          />
        </div>
        <div className="sf-canteen-user-topbar-img"></div>
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
