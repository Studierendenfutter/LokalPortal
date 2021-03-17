import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import useAuthToken from "../../services/hooks/useAuthToken";

import "./Navbar.css";

export default function Navbar({ children }) {
  const history = useHistory();
  const [authToken] = useAuthToken();

  return (
    <div>
      <div className="sf-canteen-user-topbar">
        <Link to="/" color="white">
          <div className="sf-canteen-user-topbar-left">
            <img
              src="https://studierendenfutter.de/wp-content/uploads/2021/02/Header-Desktop-s.png"
              alt="Kochmütze über gekreuzten Messer und Gabel"
              className="sf-canteen-user-topbar-img"
            />
          </div>
        </Link>
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
      <div className="sf-canteen-user-content">{children}</div>
    </div>
  );
}
